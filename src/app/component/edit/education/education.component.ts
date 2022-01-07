import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EducationCollegeInterface, EducationInterface, EducationSchoolInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education:EducationInterface = {school:[], college:[]}

  constructor(
    private basicDetailService: BasicdetailService,
    public dialog: MatDialog,
    private snack: MatSnackBar) {
      let temp = this.basicDetailService.getEducation();
      if(temp!=null){
        this.education = temp;
      }
    }

  ngOnInit(): void {
  }

  tempSchool!: EducationSchoolInterface
  openSchoolDialog(): void {
    const dialogRef = this.dialog.open(EducationSchoolDialog, {
      minWidth: '300px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.tempSchool = result
        if (this.tempSchool.name.trim() == "" || this.tempSchool.schoolName.trim() == "" || this.tempSchool.board.trim() == "" ||
            this.tempSchool.passingYear.trim() == "" || this.tempSchool.score.trim() == ""  ) {
          this.snack.open("Please provide all detail", "ok");
        } else {
          this.education.school.push(this.tempSchool);
        }
      }
    });
  }
  deleteSchool(school:EducationSchoolInterface):void {
    let index = this.education.school.indexOf(school)
    if (index > -1) {
      this.education.school.splice(index, 1);
    }
  }

  tempCollege!: EducationCollegeInterface
  openCollegeDialog(): void {
    const dialogRef = this.dialog.open(EducationCollegeDialog, {
      minWidth: '300px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.tempCollege = result
        if (this.tempCollege.collegeName.trim() == "" || this.tempCollege.courseName.trim() == "" ||
            this.tempCollege.passingYear.trim() == "" || this.tempCollege.score.trim() == "" ) {
          this.snack.open("Please provide all detail", "ok");
        } else {
          this.education.college.push(this.tempCollege);
        }
      }
    });
  }
  deleteCollege(college:EducationCollegeInterface):void {
    let index = this.education.college.indexOf(college)
    if (index > -1) {
      this.education.college.splice(index, 1);
    }
  }
  updateEducation():void{
    let temp = this.basicDetailService.addEducation(this.education);
    if(temp){
      this.snack.open("Successflly Updated!!", "Ok");
    } else {
      this.snack.open("Something went wrong!!", "Cancel");
    }
  }
  deleteEducation():void{
    let temp = this.basicDetailService.deleteEducation();
    if(temp){
      this.education = {school:[], college:[]};
      this.snack.open("Successflly Deleted!!", "Ok");
    } else {
      this.snack.open("Something went wrong!!", "Cancel");
    }
  }
}

@Component({
  selector: 'education-school-dialog',
  templateUrl: 'education-school-dialog.component.html',
})
export class EducationSchoolDialog {

  constructor(public dialogRef: MatDialogRef<EducationSchoolDialog>) { }

  data: EducationSchoolInterface = {board:"", name:"", passingYear:"", schoolName:"", score:""};

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'education-college-dialog',
  templateUrl: 'education-college-dialog.component.html',
})
export class EducationCollegeDialog {

  constructor(public dialogRef: MatDialogRef<EducationCollegeDialog>) { }

  data: EducationCollegeInterface = {collegeName:"", passingYear:"", courseName:"", score:""};

  onNoClick(): void {
    this.dialogRef.close();
  }
}