import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { BasicDetailComponent, SocialLinkDialog } from './basic-detail/basic-detail.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EducationCollegeDialog, EducationComponent, EducationSchoolDialog } from './education/education.component';
import { ExperienceComponent, ExperienceDialog } from './experience/experience.component';
import { ProjectComponent, ProjectDialog } from './project/project.component';
import { HobbiesDialog, StrengthAndHobbiesComponent, StrengthDialog } from './strength-and-hobbies/strength-and-hobbies.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CertificateDialog, SkillDialog, SkillsAndCertificatesComponent } from './skills-and-certificates/skills-and-certificates.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    BasicDetailComponent, PersonalInfoComponent, EducationComponent, ExperienceComponent,
    ProjectComponent, StrengthAndHobbiesComponent, SkillsAndCertificatesComponent, DeclarationComponent,
    SocialLinkDialog, EducationSchoolDialog, EducationCollegeDialog, SkillDialog, CertificateDialog,
    ExperienceDialog, StrengthDialog, HobbiesDialog, ProjectDialog
  ],
  imports: [
    CommonModule, EditRoutingModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, FormsModule, MatDialogModule, MatSnackBarModule, MatDividerModule
  ],

})
export class EditModule {}
