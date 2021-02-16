import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import * as moment from 'moment';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-mobile-homepage',
  templateUrl: './mobile-homepage.component.html',
  styleUrls: ['./mobile-homepage.component.scss'],
  animations: [
    trigger('showHide', [
      state('showed', style({
        overflow: 'hidden',
        height: '*'
      })),
      state('hidden', style({
        overflow: 'hidden',
        height: '0px',
        opacity: 0
      })),
      transition('showed => hidden', animate('400ms ease-in-out')),
      transition('hidden => showed', animate('400ms ease-in-out') )
    ])
  ]
})
export class MobileHomepageComponent implements OnInit {

  dataLoaded:boolean = false;
  showInfoState:'showed' | 'hidden' = 'hidden';
  showInfoText:'showed' | 'hidden' = 'hidden';
  apod_url:string = "";
  apod_json:any;
  selectedDate:any;
  allDates:string[] = [];

  myIp = "";

  constructor(private http:HttpClient, private serverService:ServerService) {
    this.selectedDate = moment();
    serverService.getIp().then(value => {
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
    this.loadData(this.selectedDate);
  }

  toggleApod(){
    if (this.showInfoState=='showed'){
      this.showInfoState='hidden';
    } else {
      this.showInfoState='showed';
    }
  } 

  toggleText(){
    if (this.showInfoText=='showed'){
      this.showInfoText='hidden';
    } else {
      this.showInfoText='showed';
    }
  } 

  myFilter = (d: Date | null): boolean => {
    if (d){
      let dateString = moment(d).format("YYYY/MM/DD");
      if (this.allDates.indexOf(dateString)>=0){
        return true;
      }
    }
    
    return false;
  }

}
