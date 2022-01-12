import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PrintResumeComponent } from './component/print-resume/print-resume.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SettingComponent } from './component/setting/setting.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "edit",
    component: SettingComponent,
    loadChildren: ()=>import("./component/edit/edit.module").then(mod=>mod.EditModule)
  },
  {
    path: "profile",
    component: ProfileComponent,
    pathMatch: "full"
  },
  {
    path: "print-resume",
    component: PrintResumeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
