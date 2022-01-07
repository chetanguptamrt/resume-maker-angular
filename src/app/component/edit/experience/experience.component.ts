import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExperienceInterface, ExperiencesInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences:ExperiencesInterface = {experiences:[]}

  constructor(
    private basicDetailService: BasicdetailService,
    public dialog: MatDialog,
    private snack: MatSnackBar) {
      let temp = this.basicDetailService.getExperience()
      if(temp!=null){
        this.experiences = temp;
      }
    }

  ngOnInit(): void {
  }


  temp!: ExperienceInterface
  openDialog(): void {
    const dialogRef = this.dialog.open(ExperienceDialog, {
      minWidth: '300px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.temp = result
        if (this.temp.companyName.trim() == "" || this.temp.jobProfile.trim() == "" || this.temp.yearOfExperience.trim() == "") {
          this.snack.open("Please provide both detail", "ok");
        } else {
          this.experiences.experiences.push(this.temp);
        }
      }
    });
  }
  deleteExperience(experience:ExperienceInterface):void {
    let index = this.experiences.experiences.indexOf(experience)
    if (index > -1) {
      this.experiences.experiences.splice(index, 1);
    }
  }

  updateExperience():void {
    let temp = this.basicDetailService.addExperience(this.experiences)
    if(temp){
      this.snack.open("Successfully Updated!!", "Ok")
    } else {
      this.snack.open("Something went wrong!!", "Cancel")
    }
  }
  deleteExperiences():void {
    let temp = this.basicDetailService.deleteExperience()
    if(temp){
      this.experiences = {experiences:[]}
      this.snack.open("Successfully Deleted!!", "Ok")
    } else {
      this.snack.open("Something went wrong!!", "Cancel")
    }
  }

}

@Component({
  selector: 'experience-dialog',
  templateUrl: 'experience-dialog.component.html',
})
export class ExperienceDialog {

  constructor(public dialogRef: MatDialogRef<ExperienceDialog>) { }

  data: ExperienceInterface = { companyName:"", jobProfile:"", yearOfExperience:"" };

  onNoClick(): void {
    this.dialogRef.close();
  }
}
