import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { SettingComponent } from './component/setting/setting.component';
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatButtonModule} from '@angular/material/button';
import { SettingLinkComponent } from './component/setting-link/setting-link.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './component/profile/profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PrintResumeComponent } from './component/print-resume/print-resume.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SettingComponent,
    SettingLinkComponent,
    ProfileComponent,
    PrintResumeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatToolbarModule, MatButtonModule, MatDividerModule,
    MatExpansionModule, MatMenuModule, MatIconModule, MatSnackBarModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
