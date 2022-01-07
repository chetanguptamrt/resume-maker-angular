import { Injectable } from '@angular/core';
import { BasicDetailInterface, EducationInterface, ExperiencesInterface, PersonalInfoInterface, ProjectsInterface, SkillsAndCertificatesInterface, StrengthsAndHobbiesInterface } from '../interface/data-template';

@Injectable({
  providedIn: 'root'
})
export class BasicdetailService {

  constructor() { }

  addBasicDetail(basicDetail:BasicDetailInterface):boolean{
    localStorage.setItem("basicDetail", JSON.stringify(basicDetail));
    return true;
  }
  
  getBasicDetail(){
    let temp = localStorage.getItem("basicDetail")
    if(temp!=null) {
      let basicDetail = JSON.parse(temp);
      return basicDetail;
    } else {
      return null;
    }
  }
  
  setPhoto(base64:any){
    localStorage.setItem("image",base64)
  }
  getPhoto(){
    let temp = localStorage.getItem("image")
    return temp;
  }
  
  addPersonalInfo(personalInfo:PersonalInfoInterface):boolean{
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    return true
  }
  
  getPersonalInfo(){
    let temp = localStorage.getItem("personalInfo")
    if(temp!=null) {
      let personalInfo = JSON.parse(temp);
      return personalInfo;
    } else {
      return null;
    }
  }

  addEducation(education:EducationInterface):boolean{
    localStorage.setItem("education", JSON.stringify(education));
    return true;
  }
  deleteEducation():boolean{
    localStorage.removeItem("education");
    return true;
  }
  
  getEducation(){
    let temp = localStorage.getItem("education")
    if(temp!=null) {
      let education = JSON.parse(temp);
      return education;
    } else {
      return null;
    }
  }

  addExperience(experience:ExperiencesInterface):boolean{
    localStorage.setItem("experiences", JSON.stringify(experience));
    return true;
  }
  deleteExperience():boolean{
    localStorage.removeItem("experiences");
    return true;
  }
  
  getExperience(){
    let temp = localStorage.getItem("experiences")
    if(temp!=null) {
      let education = JSON.parse(temp);
      return education;
    } else {
      return null;
    }
  }

  addSkillsAndCertificates(skillAndCertificate: SkillsAndCertificatesInterface):boolean {
    localStorage.setItem("skillAndCertificate", JSON.stringify(skillAndCertificate));
    return true;
  }

  getSkillsAndCertificates(){
    let temp = localStorage.getItem("skillAndCertificate")
    if(temp!=null) {
      let skillAndCertificate = JSON.parse(temp);
      return skillAndCertificate;
    } else {
      return null;
    }
  }

  addDeclaration(declaration: string):boolean {
    localStorage.setItem("declaration", declaration);
    return true;
  }
  getDeclaration() {
    let temp = localStorage.getItem("declaration");
    if(temp!=null){
      return temp;
    } else {
      return null;
    }
  }
  
  addStrengthAndHobbies(strengthAndHobbies: StrengthsAndHobbiesInterface):boolean {
    localStorage.setItem("strengthAndHobbies", JSON.stringify(strengthAndHobbies));
    return true;
  }
  deleteStrengthAndHobbies():boolean {
    localStorage.removeItem("strengthAndHobbies");
    return true;
  }
  getStrengthAndHobbies() {
    let temp = localStorage.getItem("strengthAndHobbies");
    if(temp!=null){
      return JSON.parse(temp);
    } else {
      return null;
    }
  }

  addProject(projects: ProjectsInterface):boolean {
    localStorage.setItem("projects", JSON.stringify(projects));
    return true;
  }
  deleteProject():boolean {
    localStorage.removeItem("projects");
    return true;
  }
  getProject() {
    let temp = localStorage.getItem("projects");
    if(temp!=null){
      return JSON.parse(temp);
    } else {
      return null;
    }
  }

}
