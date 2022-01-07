import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BasicdetailService } from 'src/app/services/basicdetail.service';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

  declaration:string = "I hereby declare that the above mentioned particulars are true to the best of my knowledge and belief."

  constructor(
    private basicDetailService:BasicdetailService,
    private snack:MatSnackBar
    ) {
    let temp = this.basicDetailService.getDeclaration();
    if(temp!=null){
      this.declaration = temp;
    }
  }

  ngOnInit(): void {
  }

  updateDeclaration():void{
    if(this.declaration.trim()!=""){
      let temp = this.basicDetailService.addDeclaration(this.declaration);
      if(temp){
        this.snack.open("Successfully Updated!!", "Ok")
      } else {
        this.snack.open("Something went wrong!!","Cancel")
      }
    } else {
      this.snack.open("Please provide declaration!!","Ok")
    }
  }

}
