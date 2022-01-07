import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CertificateInterface, SkillInterface, SkillsAndCertificatesInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';

@Component({
  selector: 'app-skills-and-certificates',
  templateUrl: './skills-and-certificates.component.html',
  styleUrls: ['./skills-and-certificates.component.css']
})
export class SkillsAndCertificatesComponent implements OnInit {

  skillAndCertificate:SkillsAndCertificatesInterface = {skills:[], certificates:[]}

  constructor(
    private basicDetailService: BasicdetailService,
    private snack:MatSnackBar,
    private dialog: MatDialog
  ) {
    let temp = this.basicDetailService.getSkillsAndCertificates();
    if(temp!=null) {
      this.skillAndCertificate = temp
    }
  }

  ngOnInit(): void {
  }

  tempSkill!: SkillInterface
  openSkillDialog(): void {
    if(this.skillAndCertificate.skills.length<5){
      const dialogRef = this.dialog.open(SkillDialog, {
        minWidth: '300px',
        width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result!=undefined){
          this.tempSkill = result
          if (this.tempSkill.skillName.trim() == "" || this.tempSkill.skills.trim() == "" ) {
            this.snack.open("Please provide all detail", "ok");
          } else {
            this.skillAndCertificate.skills.push(this.tempSkill);
          }
        }
      });
    } else {
      this.snack.open("You can't add more than 5 skills", "ok");
    }
  }
  deleteSkill(school:SkillInterface):void {
    let index = this.skillAndCertificate.skills.indexOf(school)
    if (index > -1) {
      this.skillAndCertificate.skills.splice(index, 1);
    }
  }

  tempCertificate!: CertificateInterface
  openCertificateDialog(): void {
    if(this.skillAndCertificate.certificates.length<5){
      const dialogRef = this.dialog.open(CertificateDialog, {
        minWidth: '300px',
        width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result!=undefined){
          this.tempCertificate = result
          if (this.tempCertificate.certificate.trim() == "") {
            this.snack.open("Please provide all detail", "ok");
          } else {
            this.skillAndCertificate.certificates.push(this.tempCertificate);
          }
        }
      });
  } else {
    this.snack.open("You can't add more than 5 certificates", "ok");
  }
  }
  deleteCertificate(college:CertificateInterface):void {
    let index = this.skillAndCertificate.certificates.indexOf(college)
    if (index > -1) {
      this.skillAndCertificate.certificates.splice(index, 1);
    }
  }

  updateData():void {
    let temp = this.basicDetailService.addSkillsAndCertificates(this.skillAndCertificate);
    if(temp) {
      this.snack.open("Successfully Updated!!", "Ok");
    } else {
      this.snack.open("Something went wrong!!", "Cancel");
    }
  }

}

@Component({
  selector: 'skill-dialog',
  templateUrl: 'skill-dialog.component.html',
})
export class SkillDialog {

  constructor(public dialogRef: MatDialogRef<SkillDialog>) { }

  data: SkillInterface = {skillName:"", skills:""};

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'certificate-dialog',
  templateUrl: 'certificate-dialog.component.html',
})
export class CertificateDialog {

  constructor(public dialogRef: MatDialogRef<CertificateDialog>) { }

  data: CertificateInterface = {certificate:""};

  onNoClick(): void {
    this.dialogRef.close();
  }
}