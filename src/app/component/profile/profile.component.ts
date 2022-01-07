import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BasicDetailInterface, PersonalInfoInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  basicDetail: BasicDetailInterface = { name: "", email: "", mobile: "", careerObjective: "", socialLinks : [] };
  imagePath: any = "assets/img/profile.jpg"

  constructor(
    private basicDetailService: BasicdetailService,
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
    if(base64==null || temp==null){
      this.snack.open("Please fill you informations", "Cancel");
    }
  }

  ngOnInit(): void {
  }
  
}
