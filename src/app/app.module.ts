import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

import { CoverageComponent } from './coverage/coverage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigComponent } from './config/config.component';
import { DesktopHomepageComponent } from './homepage/desktop-homepage/desktop-homepage.component';
import { MobileHomepageComponent } from './homepage/mobile-homepage/mobile-homepage.component';
import { HeaderComponent } from './header/header.component';
import { SatplotsDesktopComponent } from './satplots/satplots-desktop/satplots-desktop.component';
import { ProjectsDesktopComponent } from './projects/projects-desktop/projects-desktop.component';
import { AboutDesktopComponent } from './about/about-desktop/about-desktop.component';
import { ExperienceDesktopComponent } from './experience/experience-desktop/experience-desktop.component';
import { ContactDesktopComponent } from './contact/contact-desktop/contact-desktop.component';
import { CreditsComponent } from './credits/credits.component';
import { ProjectsMobileComponent } from './projects/projects-mobile/projects-mobile.component';
import { SatplotsMobileComponent } from './satplots/satplots-mobile/satplots-mobile.component';
import { ExperienceMobileComponent } from './experience/experience-mobile/experience-mobile.component';
import { ContactMobileComponent } from './contact/contact-mobile/contact-mobile.component';
import { AboutMobileComponent } from './about/about-mobile/about-mobile.component';
import { LoaderComponent } from './loader/loader.component';
import { DesktopMclassComponent } from './mclass/desktop-mclass/desktop-mclass.component';
import { MobileMclassComponent } from './mclass/mobile-mclass/mobile-mclass.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverageComponent,
    ConfigComponent,
    DesktopHomepageComponent,
    MobileHomepageComponent,
    HeaderComponent,
    SatplotsDesktopComponent,
    ProjectsDesktopComponent,
    AboutDesktopComponent,
    ExperienceDesktopComponent,
    ContactDesktopComponent,
    CreditsComponent,
    ProjectsMobileComponent,
    SatplotsMobileComponent,
    ExperienceMobileComponent,
    ContactMobileComponent,
    AboutMobileComponent,
    LoaderComponent,
    DesktopMclassComponent,
    MobileMclassComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatInputModule,
    MatListModule,
    NgbModalModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    CarouselModule,
    WavesModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
