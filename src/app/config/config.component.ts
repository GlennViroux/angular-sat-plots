import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Config } from '../config';

import * as d3 from "d3";
import * as moment from 'moment';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  dataLoaded: boolean = false;
  IgsStations: string[] = [];
  allSatellites: string[] = [];
  selectedOptions: string[] = [];
  selectedOptionsSats: string[] = [];
  commaIgsStations: string = "";
  commaSats: string = "";
  invalidStations: string[] = [];
  invalidSats: string[] = [];
  noDataSats:string[] = [];
  invalidDate: boolean = false;
  successfullUpload: boolean = false;
  pickedDate: any = moment().subtract(1, 'days');

  submitLoading: boolean = false;
  isCollapsed: { [htmlId: string]: boolean } = {};

  constructor(private configService: ConfigService) {
    d3.json<Promise<string[]>>("http://ad1b704a28c2.ngrok.io/stations")
      .then((d: any) => {
        this.IgsStations = d;
        d3.json<Promise<string[]>>("http://ad1b704a28c2.ngrok.io/prns")
          .then((d: any) => {
            this.allSatellites = d.sort((n1: string, n2: string) => {
              if (n1 > n2) {
                return 1;
              }

              if (n1 < n2) {
                return -1;
              }

              return 0;
            });
            this.dataLoaded = true;
          })
      });

    configService.drawingObservable.subscribe((_: boolean) => {
      this.submitLoading = false;
      this.successfullUpload = true;
    });
  }

  ngOnInit(): void {
  }

  private onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }

  async onSubmit(form: NgForm) {
    this.submitLoading = true;
    this.invalidDate = false;
    this.noDataSats = [];
    this.invalidSats = [];
    this.invalidStations = [];
    this.successfullUpload = false;

    //Check provided date
    let checkData: any = await d3.json(`https://ad1b704a28c2.ngrok.io/check?year=${this.pickedDate.format("YYYY")}&month=${this.pickedDate.format("MM")}&day=${this.pickedDate.format("DD")}`)
    if (!checkData.sat_points || !checkData.sat_track || !checkData.stations) {
      this.invalidDate = true;
      this.submitLoading = false;
      return
    }

    //Stations
    let configuredStations = this.selectedOptions.concat(this.commaIgsStations.split(",").map((element: string) => element.toUpperCase()));
    configuredStations = configuredStations.filter(this.onlyUnique);

    let foundStations: string[] = [];
    configuredStations.forEach((station: string, index: number) => {
      if (!station) {
        configuredStations.splice(index, 1);
      } else if (this.IgsStations.indexOf(station) <= -1) {
        foundStations.push(station);
      }
    });
    this.invalidStations = foundStations;

    //Satellites
    let configuredSatellites = this.selectedOptionsSats.concat(this.commaSats.split(",").map((element: string) => element.toUpperCase()));
    configuredSatellites = configuredSatellites.filter(this.onlyUnique);

    let foundSats:string[] = [];
    let foundNoDataSats:string[] = [];
    let satsCopy:string[] = [...configuredSatellites];
    for (let index=0;index<satsCopy.length;index++){
      let sat:string = satsCopy[index];
      let checkData:any = await d3.json(`https://ad1b704a28c2.ngrok.io/check?sat=${sat}&year=${this.pickedDate.format("YYYY")}&month=${this.pickedDate.format("MM")}&day=${this.pickedDate.format("DD")}`)
      if (!sat) {
        let removeIndex:number = configuredSatellites.indexOf(sat);
        configuredSatellites.splice(removeIndex,1);
      } else if (this.allSatellites.indexOf(sat) <= -1) {
        foundSats.push(sat);
        let removeIndex:number = configuredSatellites.indexOf(sat);
        configuredSatellites.splice(removeIndex,1);
      } else if (!checkData.sat_points || !checkData.sat_track || !checkData.stations) {
        foundNoDataSats.push(sat);
        let removeIndex:number = configuredSatellites.indexOf(sat);
        configuredSatellites.splice(removeIndex,1);
      }
    }

    this.invalidSats = foundSats;
    this.noDataSats = foundNoDataSats;

    let newConfig: Config = new Config(this.pickedDate, configuredStations, configuredSatellites);
    this.configService.submitConfig(newConfig);
  }

  removeErrorMsg(type: string) {
    if (type == "stations") {
      this.invalidStations = [];
    } else if (type == "sats") {
      this.invalidSats = [];
    } else if (type == "date") {
      this.invalidDate = false;
    } else if (type == "success") {
      this.successfullUpload = false;
    } else if (type == "noDataSats") {
      this.noDataSats = [];
    }
  }

  selectAllStations() {
    this.selectedOptions = this.IgsStations;
  }

  clearAllStations() {
    this.selectedOptions = [];
  }

  selectAllSats(constel: string) {
    if (constel == "galileo") {
      this.selectedOptionsSats = this.allSatellites.filter(sat => sat.startsWith("E"));
      this.isCollapsed['collapseGalSats'] = true;
    } else if (constel == "GPS") {
      this.selectedOptionsSats = this.allSatellites.filter(sat => sat.startsWith("G"));
      this.isCollapsed['collapseGPSSats'] = true;
    } else if (constel == "glonass") {
      this.selectedOptionsSats = this.allSatellites.filter(sat => sat.startsWith("R"));
      this.isCollapsed['collapseGloSats'] = true;
    } else if (constel == "beidou") {
      this.selectedOptionsSats = this.allSatellites.filter(sat => sat.startsWith("C"));
      this.isCollapsed['collapseBeiSats'] = true;
    }
  }

  clearAllSats() {
    this.selectedOptionsSats = [];
  }

  filterSats(sats:string[],indicator:string){
    return sats.filter((sat:string) => sat.startsWith(indicator));
  }
}
