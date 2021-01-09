import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = false;
  public showHeader = true;

  constructor(private router:Router,public appStateService:AppStateService) {
    router.events.subscribe((val:any) => {
      if (val instanceof NavigationEnd){
        console.log(val.url);
        if (val.url=="/satplots"){
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }

  desActivateAll(){
    var elements = document.getElementsByClassName('nav-item');
    for (var i=0;i<elements.length;i++){
      elements[i].className = elements[i].className.replace(' active','');
    }
  }

  clickEvent(event:any,destination:string){
    this.desActivateAll();
    var target = event.target;
    var pElement = target.parentElement;
    pElement.className += ' active';
    this.router.navigateByUrl('/'+destination);
  }

}
