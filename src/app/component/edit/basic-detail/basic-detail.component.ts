import { Component, OnInit } from '@angular/core';
import { BasicDetailInterface, PersonalInfoInterface, SocialLinkInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.css']
})
export class BasicDetailComponent implements OnInit {

  basicDetail: BasicDetailInterface = { name: "", email: "", mobile: "", careerObjective: "", socialLinks : [] };
  imagePath: any = "assets/img/profile.jpg"

  constructor(
    private basicDetailService: BasicdetailService,
    public dialog: MatDialog,
    private snack: MatSnackBar) {

    let temp = this.basicDetailService.getBasicDetail();
    if (temp != null) {
      this.basicDetail = temp
    }
    let base64 = this.basicDetailService.getPhoto()
    if(base64!=null){
      this.imagePath = "data:image/png;base64,"+base64
    } else {
      let pi:PersonalInfoInterface = this.basicDetailService.getPersonalInfo()
      if(pi!=null){
        if(pi.gender=="male"){
          this.imagePath = "assets/img/profile-male.jpg"
        } else if(pi.gender=="female") {
          this.imagePath = "assets/img/profile-female.jpg"
        }
      }
    }
  }

  ngOnInit(): void {
  }

  gotPhoto(element:any): void {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onload =async (reader) => {
      let base64String = reader.target?.result;
      let imageBase64Stringsep = base64String?.toString().replace("data:", "").replace(/^.+,/, "");
      this.basicDetailService.setPhoto(imageBase64Stringsep)
      this.imagePath = "data:image/png;base64,"+imageBase64Stringsep
    }
    reader.readAsDataURL(file);
  }
  
  submit(): void {
    if (this.basicDetail.name.trim() == "" || this.basicDetail.email.trim() == "" ||
      this.basicDetail.mobile.trim() == "" || this.basicDetail.careerObjective.trim() == "") {
      this.snack.open("Please provide all detail", "cancel")
    } else {
      let temp =this.basicDetailService.addBasicDetail(this.basicDetail)
      if(temp){
        this.snack.open("Successflly Updated!!", "Ok");
      } else {
        this.snack.open("Something went wrong!!", "Cancel");
      }
    }
  }

  temp!: SocialLinkInterface
  openDialog(): void {
    if (this.basicDetail.socialLinks.length < 3) {
      const dialogRef = this.dialog.open(SocialLinkDialog, {
        minWidth: '300px',
        width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result!=undefined){
          this.temp = result
          if (this.temp.account.trim() == "" || this.temp.link.trim() == "" ) {
            this.snack.open("Please provide both detail", "ok");
          } else {
            this.basicDetail.socialLinks.push(this.temp);
          }
        }
      });
    } else {
      this.snack.open("You can't add more than 3 social links.", "ok");
    }
  }
  deleteSocialLink(socialLink:SocialLinkInterface):void {
    let index = this.basicDetail.socialLinks.indexOf(socialLink)
    if (index > -1) {
      this.basicDetail.socialLinks.splice(index, 1);
    }
  }
}

@Component({
  selector: 'social-link-dialog',
  templateUrl: 'basic-detail-dialog.component.html',
})
export class SocialLinkDialog {

  constructor(public dialogRef: MatDialogRef<SocialLinkDialog>) { }

  data: SocialLinkInterface = { account: "", link: "" };

  onNoClick(): void {
    this.dialogRef.close();
  }
}
