import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-desktop',
  templateUrl: './experience-desktop.component.html',
  styleUrls: ['./experience-desktop.component.scss']
})
export class ExperienceDesktopComponent implements OnInit {

  isCollapsed:{[htmlId:string]:boolean} = {};

  constructor() { }

  ngOnInit(): void {
  }

}
