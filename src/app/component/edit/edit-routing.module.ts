import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { StrengthAndHobbiesComponent } from './strength-and-hobbies/strength-and-hobbies.component';
import { ProjectComponent } from './project/project.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { SkillsAndCertificatesComponent } from './skills-and-certificates/skills-and-certificates.component';

const routes: Routes = [
  {
    path:"",
    component: BasicDetailComponent,
    pathMatch: "full"
  },
  {
    path:"basic-detail",
    component: BasicDetailComponent,
    pathMatch: "full"
  },
  {
    path:"personal-info",
    component:PersonalInfoComponent,
    pathMatch: "full"
  },
  {
    path:"education",
    component:EducationComponent,
    pathMatch: "full"
  },
  {
    path:"skills-and-certificates",
    component:SkillsAndCertificatesComponent,
    pathMatch: "full"
  },
  {
    path:"experience",
    component:ExperienceComponent,
    pathMatch: "full"
  },
  {
    path:"strength-hobbies",
    component:StrengthAndHobbiesComponent,
    pathMatch: "full"
  },
  {
    path:"project",
    component:ProjectComponent,
    pathMatch: "full"
  },
  {
    path:"declaration",
    component:DeclarationComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
