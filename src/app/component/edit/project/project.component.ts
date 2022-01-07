import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectInterface, ProjectsInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: ProjectsInterface = {projects:[]}

  constructor(
  private basicDetailService: BasicdetailService,
  public dialog: MatDialog,
  private snack: MatSnackBar) {
    let temp = this.basicDetailService.getProject();
    if(temp!=null){
      this.projects = temp
    }
  }

  ngOnInit(): void {
  }

  project!: ProjectInterface
  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectDialog, {
      minWidth: '300px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.project = result
        if (this.project.name.trim() == "" || this.project.date.trim() == "" || 
            this.project.description.trim() == "" || this.project.associated.trim() == "") {
          this.snack.open("Please provide all details", "ok");
        } else {
          this.projects.projects.push(this.project);
        }
      }
    });
  }
  deleteProject(project:ProjectInterface):void {
    let index = this.projects.projects.indexOf(project)
    if (index > -1) {
      this.projects.projects.splice(index, 1);
    }
  }

  updateData() {
    let temp = this.basicDetailService.addProject(this.projects);
    if(temp){
      this.snack.open("Successflly Updated!!", "Ok");
    } else {
      this.snack.open("Something went wrong!!", "Cancel");
    }
  }

  deleteData() {
    let temp = this.basicDetailService.deleteProject();
    if(temp){
      this.projects = {projects:[]}
      this.snack.open("Successflly Deleted!!", "Ok");
    } else {
      this.snack.open("Something went wrong!!", "Cancel");
    }
  }

}

@Component({
  selector: 'project-dialog',
  templateUrl: 'project-dialog.component.html',
})
export class ProjectDialog {

  constructor(public dialogRef: MatDialogRef<ProjectDialog>) { }

  data: ProjectInterface = {associated:"", date:"", description:"", name:""}

  onNoClick(): void {
    this.dialogRef.close();
  }
}