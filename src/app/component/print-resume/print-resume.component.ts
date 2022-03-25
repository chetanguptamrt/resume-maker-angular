import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AllModelInterface, BasicDetailInterface, EducationInterface, ExperiencesInterface, PersonalInfoInterface, ProjectsInterface, SkillsAndCertificatesInterface, StrengthsAndHobbiesInterface } from 'src/app/interface/data-template';
import { BasicdetailService } from 'src/app/services/basicdetail.service';
import { StandardDownloadService } from 'src/app/services/standard-download.service';

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
  all!: AllModelInterface;
  
  constructor(
    private basicDetailService: BasicdetailService,
    private snack: MatSnackBar,
    private standardDownload: StandardDownloadService) {
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
      this.all = {
        profilePic: this.imagePath,
        basicDetails: this.basicDetail,
        personalInfo: this.personalInfo,
        educationSchools: this.education.school,
        educationColleges: this.education.college,
        skills: this.skillAndCertificate.skills,
        certificates: this.skillAndCertificate.certificates,
        experiences: this.experiences.experiences,
        strengthsAndHobbies: this.strengthAndHobbies,
        projects: this.projects.projects,
        declaration: this.declaration
      }
    }
  }

  ngOnInit(): void {
  }

  pResumeDownload(n:number):void {
    this.standardDownload.downlaod(this.all,n).subscribe(
      (response:any)=>{
        if(response.status==200) {
          var blob = new Blob([this._base64ToArrayBuffer(response.content)], { type: "application/pdf" });				    
          var url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = "resume.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        } else {
          alert("Something went wrong!!");
        }
      },
      error=>{
        alert("Something went wrong, please try again later!!");
      }
    )
  }
  
  _base64ToArrayBuffer(base64:any) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

}
