import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { AboutDesktopComponent } from './about/about-desktop/about-desktop.component';
import { ContactDesktopComponent } from './contact/contact-desktop/contact-desktop.component';
import { ExperienceDesktopComponent } from './experience/experience-desktop/experience-desktop.component';
import { DesktopHomepageComponent } from './homepage/desktop-homepage/desktop-homepage.component';
import { MobileHomepageComponent } from './homepage/mobile-homepage/mobile-homepage.component';
import { ProjectsDesktopComponent } from './projects/projects-desktop/projects-desktop.component';
import { SatplotsDesktopComponent } from './satplots/satplots-desktop/satplots-desktop.component';

import { AppStateService } from './services/app-state.service';

const desktopRoutes: Routes = [
  {path:'',component:DesktopHomepageComponent},
  {path:'satplots',component:SatplotsDesktopComponent},
  {path:'projects',component:ProjectsDesktopComponent},
  {path:'about',component:AboutDesktopComponent},
  {path:'experience',component:ExperienceDesktopComponent},
  {path:'contact',component:ContactDesktopComponent}
];

const mobileRoutes: Routes = [
  {path:'',component:MobileHomepageComponent}
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
