import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BasicDetailInterface, EducationInterface, ExperiencesInterface, PersonalInfoInterface, ProjectsInterface, SkillsAndCertificatesInterface, StrengthsAndHobbiesInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';

@Component({
  selector: 'app-print-resume',
  templateUrl: './print-resume.component.html',
  styleUrls: ['./print-resume.component.css']
})
export class PrintResumeComponent implements OnInit {

  basicDetail: BasicDetailInterface = { name: "", email: "", mobile: "", careerObjective: "", socialLinks : [] };
  imagePath: any = "assets/img/profile.jpg"
  declaration:string = "I hereby declare that the above mentioned particulars are true to the best of my knowledge and belief."
  education:EducationInterface = {school:[], college:[]}
  experiences:ExperiencesInterface = {experiences:[]}
  personalInfo:PersonalInfoInterface = {canStartWork:"", currentLocation:"", dateOfBirth: new Date(), gender:"",
  hometown:"", languageKnown:"", lookingForA:"", married:"", preferedLocation:""}
  projects: ProjectsInterface = {projects:[]}
  skillAndCertificate:SkillsAndCertificatesInterface = {skills:[], certificates:[]}
  strengthAndHobbies: StrengthsAndHobbiesInterface = {hobbies:[], strengths:[]}
  show:boolean = false;

  constructor(
    private basicDetailService: BasicdetailService,
    private snack: MatSnackBar) {
    let temp = this.basicDetailService.getBasicDetail();
    if (temp != null) {
      this.basicDetail = temp
    }
    let base64 = this.basicDetailService.getPhoto()
    if(base64!=null){
      this.imagePath = "data:image/png;base64,"+base64;
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
      this.show = true;
    } else {
      let tempPI:PersonalInfoInterface = this.basicDetailService.getPersonalInfo()
      if(tempPI!=null){
        this.personalInfo = tempPI
      }
      let tempDec:string | null = this.basicDetailService.getDeclaration()
      if(tempDec!=null){
        this.declaration = tempDec
      }
      let tempEdu:EducationInterface = this.basicDetailService.getEducation()
      if(tempEdu!=null){
        this.education = tempEdu
      }
      let tempExp:ExperiencesInterface = this.basicDetailService.getExperience()
      if(tempExp!=null){
        this.experiences = tempExp
      }
      let tempPro:ProjectsInterface = this.basicDetailService.getProject()
      if(tempPro!=null){
        this.projects = tempPro
      }
      let tempSC:SkillsAndCertificatesInterface = this.basicDetailService.getSkillsAndCertificates()
      if(tempSC!=null){
        this.skillAndCertificate = tempSC
      }
      let tempSH:StrengthsAndHobbiesInterface = this.basicDetailService.getStrengthAndHobbies()
      if(tempSH!=null){
        this.strengthAndHobbies = tempSH
      }
    }
  }

  ngOnInit(): void {
  }

}
