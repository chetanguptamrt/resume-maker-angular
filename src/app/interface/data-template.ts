export interface BasicDetailInterface{
  name:string;
  mobile:string;
  email:string;
  careerObjective:string;
  socialLinks:SocialLinkInterface[];
}
export interface SocialLinkInterface{
  account:string;
  link:string;
}
export interface PersonalInfoInterface {
  currentLocation: string;
  hometown: string;
  dateOfBirth: Date;
  gender: string;
  married: string;
  languageKnown: string;
  lookingForA: string;
  canStartWork: string;
  preferedLocation: string;
}
export interface EducationSchoolInterface {
  name: string;
  schoolName: string;
  board: string;
  passingYear: string;
  score: string;
}
export interface EducationCollegeInterface {
  courseName: string;
  collegeName: string;
  passingYear: string;
  score: string;
}
export interface EducationInterface{
  school: EducationSchoolInterface[]
  college: EducationCollegeInterface[]
}
export interface SkillInterface{
  skillName: string;
  skills: string;
}
export interface CertificateInterface{
  certificate: string;
}
export interface SkillsAndCertificatesInterface {
  skills: SkillInterface[];
  certificates: CertificateInterface[];
}
export interface ExperienceInterface {
  companyName:string;
  jobProfile:string;
  yearOfExperience:string;
}
export interface ExperiencesInterface {
  experiences: ExperienceInterface[];
}
export interface StrengthsAndHobbiesInterface {
  strengths: string[];
  hobbies: string[];
}
export interface ProjectInterface{
  name: string;
  date: string;
  associated: string;
  description: string;
}
export interface ProjectsInterface{
  projects: ProjectInterface[];
}
export interface AllModelInterface {
  profilePic:string,
  basicDetails: BasicDetailInterface,
  personalInfo: PersonalInfoInterface,
  educationSchools: EducationSchoolInterface[],
  educationColleges: EducationCollegeInterface[],
  skills: SkillInterface[],
  certificates: CertificateInterface[],
  experiences: ExperienceInterface[],
  strengthsAndHobbies: StrengthsAndHobbiesInterface,
  projects: ProjectInterface[],
  declaration: string
}