import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonalInfoInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  personalInfo:PersonalInfoInterface = {canStartWork:"", currentLocation:"", dateOfBirth: new Date(), gender:"",
        hometown:"", languageKnown:"", lookingForA:"", married:"", preferedLocation:""}
  picker:any
  constructor(private basicDetailService:BasicdetailService, private snack:MatSnackBar) {
    let temp =  this.basicDetailService.getPersonalInfo()
    if(temp!=null) {
      this.personalInfo = temp
    }
  }

  ngOnInit(): void {
  }
  onSubmit():void {
    let temp = this.basicDetailService.addPersonalInfo(this.personalInfo);
    if(temp){
      this.snack.open("Successflly Updated!!", "Ok");
    } else {
      this.snack.open("Something went wrong!!", "Cancel");
    }
  }
}
