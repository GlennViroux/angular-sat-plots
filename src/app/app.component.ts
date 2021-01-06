import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-satplots';

  constructor(iconRegistry:MatIconRegistry,sanitizer: DomSanitizer)
  {
    iconRegistry.addSvgIcon(
      'personal-logo',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/gv_logo.svg')
    );
  }
}
