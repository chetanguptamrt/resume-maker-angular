import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StrengthsAndHobbiesInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';

@Component({
  selector: 'app-strength-and-hobbies',
  templateUrl: './strength-and-hobbies.component.html',
  styleUrls: ['./strength-and-hobbies.component.css']
})
export class StrengthAndHobbiesComponent implements OnInit {

  strengthAndHobbies: StrengthsAndHobbiesInterface = {hobbies:[], strengths:[]}

  constructor(
    private basicDetailService: BasicdetailService,
    public dialog: MatDialog,
    private snack: MatSnackBar) {
      let temp = this.basicDetailService.getStrengthAndHobbies();
      if(temp!=null) {
        this.strengthAndHobbies = temp;
      }
    }

  ngOnInit(): void {
  }

  strength!: string
  openStrengthDialog(): void {
    if (this.strengthAndHobbies.strengths.length < 5) {
      const dialogRef = this.dialog.open(StrengthDialog, {
        minWidth: '300px',
        width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result!=undefined){
          this.strength = result
          if (this.strength.trim() == "") {
            this.snack.open("Please provide strength", "ok");
          } else {
            this.strengthAndHobbies.strengths.push(this.strength);
          }
        }
      });
    } else {
      this.snack.open("You can't add more than 5 Strength.", "ok");
    }
  }
  deleteStrength(strength:string):void {
    let index = this.strengthAndHobbies.strengths.indexOf(strength)
    if (index > -1) {
      this.strengthAndHobbies.strengths.splice(index, 1);
    }
  }
  
  hobbies!: string
  openHobbiesDialog(): void {
    if (this.strengthAndHobbies.hobbies.length < 3) {
      const dialogRef = this.dialog.open(HobbiesDialog, {
        minWidth: '300px',
        width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result!=undefined){
          this.strength = result
          if (this.strength.trim() == "") {
            this.snack.open("Please provide hobbies", "ok");
          } else {
            this.strengthAndHobbies.hobbies.push(this.strength);
          }
        }
      });
    } else {
      this.snack.open("You can't add more than 3 Hobbies.", "ok");
    }
  }
  deleteHobbies(hobbies:string):void {
    let index = this.strengthAndHobbies.hobbies.indexOf(hobbies)
    if (index > -1) {
      this.strengthAndHobbies.hobbies.splice(index, 1);
    }
  }

  updateData() {
    let temp = this.basicDetailService.addStrengthAndHobbies(this.strengthAndHobbies);
    if(temp){
      this.snack.open("Successflly Updated!!", "Ok");
    } else {
      this.snack.open("Something went wrong!!", "Cancel");
    }
  }

  deleteData() {
    let temp = this.basicDetailService.deleteStrengthAndHobbies();
    if(temp){
      this.snack.open("Successflly Deleted!!", "Ok");
    } else {
      this.snack.open("Something went wrong!!", "Cancel");
    }
  }

}

@Component({
  selector: 'strength-dialog',
  templateUrl: 'strength-dialog.component.html',
})
export class StrengthDialog {

  constructor(public dialogRef: MatDialogRef<StrengthDialog>) { }

  strength:string = ""

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}

@Component({
  selector: 'hobbies-dialog',
  templateUrl: 'hobbies-dialog.component.html',
})
export class HobbiesDialog {

  constructor(public dialogRef: MatDialogRef<HobbiesDialog>) { }

  hobbies:string = ""

  onNoClick(): void {
    this.dialogRef.close();
  }
}