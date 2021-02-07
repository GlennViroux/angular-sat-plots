import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import * as moment from 'moment';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-desktop-homepage',
  templateUrl: './desktop-homepage.component.html',
  styleUrls: ['./desktop-homepage.component.scss'],
  animations: [
    trigger('showHide', [
      state('showed', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('showed => hidden', [
        animate('300ms')
      ])
    ]),
    trigger('showHideImage', [
      state('showed', style({
        opacity: 0.4
      })),
      state('hidden', style({
        opacity: 1
      })),
      transition('showed => hidden', [
        animate('300ms')
      ])
    ])
  ]
})
export class DesktopHomepageComponent implements OnInit {

  dataLoaded:boolean = false;
  showInfoState:'showed' | 'hidden' = 'hidden';
  showInfoText:'showed' | 'hidden' = 'hidden';
  apod_url:string = "";
  apod_json:any;
  selectedDate:any;
  selectedDateStr:string = "";
  allDates:string[] = [];

  myIp = "glenny.hopto.org";

  constructor(private http:HttpClient, serverService:ServerService) {
    this.selectedDate = moment();
    serverService.getIp().then(value => {
      console.log("Glenny homepage");
      console.log(value);
      this.myIp = value;
      this.loadData(this.selectedDate);
    })
  }

  ngOnInit(): void {}

  async loadData(date:any){
    this.dataLoaded = false;
    this.apod_url = `https://${this.myIp}/apod/image?year=${date.format('YYYY')}&month=${date.format("MM")}&day=${date.format("DD")}&closest=true`;
    await this.http.get(`https://${this.myIp}/apod/json?year=${date.format('YYYY')}&month=${date.format("MM")}&day=${date.format("DD")}&closest=true`)
    .toPromise()
    .then((response:any) => {
      this.apod_json = response;
    });
    await this.http.get(`https://${this.myIp}/apod/dates`)
    .toPromise()
    .then((response:any) => {
      this.allDates = response;
    });
    this.dataLoaded = true;
  }

  selectDate(){
    this.selectedDate = moment(this.selectedDateStr,"YYYY/MM/DD");
    this.loadData(this.selectedDate);
  }

  apodEnter(){
    this.showInfoState = 'showed';
  }

  apodLeave(){
    this.showInfoState = 'hidden';
  }

  toggleText(){
    if (this.showInfoText=='showed'){
      this.showInfoText='hidden';
    } else {
      this.showInfoText='showed';
    }
  } 

}
