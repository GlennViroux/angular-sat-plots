import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { AboutDesktopComponent } from './about/about-desktop/about-desktop.component';
import { AboutMobileComponent } from './about/about-mobile/about-mobile.component';
import { ContactDesktopComponent } from './contact/contact-desktop/contact-desktop.component';
import { ContactMobileComponent } from './contact/contact-mobile/contact-mobile.component';
import { ExperienceDesktopComponent } from './experience/experience-desktop/experience-desktop.component';
import { ExperienceMobileComponent } from './experience/experience-mobile/experience-mobile.component';
import { DesktopHomepageComponent } from './homepage/desktop-homepage/desktop-homepage.component';
import { MobileHomepageComponent } from './homepage/mobile-homepage/mobile-homepage.component';
import { LoaderComponent } from './loader/loader.component';
import { DesktopMclassComponent } from './mclass/desktop-mclass/desktop-mclass.component';
import { MobileMclassComponent } from './mclass/mobile-mclass/mobile-mclass.component';
import { ProjectsDesktopComponent } from './projects/projects-desktop/projects-desktop.component';
import { ProjectsMobileComponent } from './projects/projects-mobile/projects-mobile.component';
import { SatplotsDesktopComponent } from './satplots/satplots-desktop/satplots-desktop.component';
import { SatplotsMobileComponent } from './satplots/satplots-mobile/satplots-mobile.component';

import { AppStateService } from './services/app-state.service';

const desktopRoutes: Routes = [
  {path:'',component:DesktopHomepageComponent},
  {path:'satplots',component:SatplotsDesktopComponent},
  {path:'projects',component:ProjectsDesktopComponent},
  {path:'about',component:AboutDesktopComponent},
  {path:'experience',component:ExperienceDesktopComponent},
  {path:'contact',component:ContactDesktopComponent},
  {path:'loader',component:LoaderComponent},
  {path:'mclas',component:DesktopMclassComponent}
];

const mobileRoutes: Routes = [
  {path:'',component:MobileHomepageComponent},
  {path:'satplots',component:SatplotsMobileComponent},
  {path:'projects',component:ProjectsMobileComponent},
  {path:'about',component:AboutMobileComponent},
  {path:'experience',component:ExperienceMobileComponent},
  {path:'contact',component:ContactMobileComponent},
  {path:'mclas',component:MobileMclassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor (private router: Router, appStateService: AppStateService){
    this.router = router;
    if (appStateService.getIsMobileResolution()){
      this.router.resetConfig(mobileRoutes);
    }
  }
}
