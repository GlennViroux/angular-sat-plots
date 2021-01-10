import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-mobile',
  templateUrl: './experience-mobile.component.html',
  styleUrls: ['./experience-mobile.component.scss']
})
export class ExperienceMobileComponent implements OnInit {

  isCollapsed:{[htmlId:string]:boolean} = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
