import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { ServerService } from 'src/app/services/server.service';

declare var MediaRecorder: any;

export interface Genre {
  name: string,
  percentage: number
}

export interface ServerState {
  state: string,
  status: string,
  perc:number,
  result: Genre[]
}

@Component({
  selector: 'app-desktop-mclass',
  templateUrl: './desktop-mclass.component.html',
  styleUrls: ['./desktop-mclass.component.scss']
})
export class DesktopMclassComponent implements OnInit {

  svg: any;
  recbutton: any;
  size: number;
  recradius: number;
  myrecorder: any;
  audioChunks: any;
  audioBlob: any;

  elapsed_diff = 0;
  elapsed_time = "00:00:00:000";
  start_time = moment();

  recording = false;
  uploading = false;
  showResult = false;
  showError = false;
  showWarning = false;
  showRecordInfo = false;
  showText = "";
  errorText = "";
  selectedFile = "";

  progressPerc = 0;
  progressStatus = "No status"

  myIp = "";

  constructor(private http: HttpClient, serverService: ServerService) {
    this.size = 140;
    this.recradius = 40;
    serverService.getIp().then(value => {
      this.myIp = value;
    })
  }

  ngOnInit(): void {
    this.initSvg();
  }

  initSvg() {
    this.svg = d3.select("#record")
      .append("svg")
      .attr("width", this.size)
      .attr("height", this.size)
      .attr("viewBox", `0 0 ${this.size} ${this.size}`)
      .attr("display", "block")
      .style("cursor", "pointer")
      .on("click", () => this.toggleRecording())

    this.recbutton = this.svg.append("rect")
      .attr("rx", this.recradius)
      .attr("ry", this.recradius)
      .attr("x", this.size / 2 - this.recradius)
      .attr("y", this.size / 2 - this.recradius)
      .attr("width", 2 * this.recradius)
      .attr("height", 2 * this.recradius)
      .attr("stroke", "red")
      .attr("fill", "red")
      .on("mouseover", () => {
        if (!this.recording) {
          this.increaseCircle(100, 10)
        }
      })
      .on("mouseleave", () => {
        if (!this.recording) {
          this.resetCircle(100);
        }
      });

    this.svg.append("circle")
      .attr("stroke", "grey")
      .attr("stroke-width", 5)
      .attr("fill", "none")
      .attr("cx", this.size / 2)
      .attr("cy", this.size / 2)
      .attr("r", this.size / 2 - 10)
  }

  toggleRecording() {
    if (this.recording) {
      this.recording = false;
      this.resetCircle(400);
      this.stopRecording();
    } else {
      this.resetAll();
      this.recording = true;
      this.makeSquare();
      this.recordAudio();

    }
  }

  async playTimer() {
    this.start_time = moment();

    while (this.recording) {
      await this.delay(30);
      this.elapsed_diff = moment().diff(this.start_time, "milliseconds");
      this.elapsed_time = moment.duration(this.elapsed_diff, 'milliseconds').format("HH:mm:ss:SSS", { trim: false });
    }
  }

  recordAudio() {
    let constraints = {
      audio: {
        echoCancellation: false,
        googAutoGainControl: false
      }
    }

    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        this.myrecorder = new MediaRecorder(stream);
        this.playTimer();
        this.myrecorder.start();

        this.audioChunks = [];
        this.myrecorder.addEventListener("dataavailable", (event: any) => {
          this.audioChunks.push(event.data);
        });

        this.myrecorder.addEventListener('stop', () => {
          if (this.elapsed_diff/1000<=20){
            this.showError = true;
            this.errorText = "Please provide at least 20 seconds of audio.";
            
          } else {
            this.showRecordInfo = true;
            this.audioBlob = new Blob(this.audioChunks, { type: "audio/wav" });
            this.postBlob(this.audioBlob);
          }

        })

      });

  }

  stopRecording() {
    this.myrecorder.stop();
  }

  resetCircle(duration: number) {
    this.recbutton
      .transition()
      .duration(duration)
      .attr("rx", this.recradius)
      .attr("ry", this.recradius)
      .attr("x", this.size / 2 - this.recradius)
      .attr("y", this.size / 2 - this.recradius)
      .attr("width", 2 * this.recradius)
      .attr("height", 2 * this.recradius);
  }

  increaseCircle(duration: number, increment: number) {
    this.recbutton
      //Make bigger circle
      .transition()
      .duration(duration)
      .attr("rx", this.recradius + increment)
      .attr("ry", this.recradius + increment)
      .attr("x", this.size / 2 - this.recradius - increment / 2)
      .attr("y", this.size / 2 - this.recradius - increment / 2)
      .attr("width", 2 * this.recradius + increment)
      .attr("height", 2 * this.recradius + increment)
  }

  makeSquare() {
    let duration = 100;
    let increment = 20;
    this.recbutton
      //Make bigger circle
      .transition()
      .duration(duration)
      .attr("rx", this.recradius + increment)
      .attr("ry", this.recradius + increment)
      .attr("x", this.size / 2 - this.recradius - increment / 2)
      .attr("y", this.size / 2 - this.recradius - increment / 2)
      .attr("width", 2 * this.recradius + increment)
      .attr("height", 2 * this.recradius + increment)
      //Make square
      .transition()
      .duration(400)
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("width", 50)
      .attr("height", 50)
      .attr("x", (this.size - 50) / 2)
      .attr("y", (this.size - 50) / 2);
  }

  delay(delay: number) {
    return new Promise(r => {
      setTimeout(r, delay);
    })
  }

  resetAll() {
    this.recording = false;
    this.uploading = false;
    this.showResult = false;
    this.showError = false;
    this.showWarning = false;
    this.showRecordInfo = false;
    this.showText = "";
    this.errorText = "";
    this.selectedFile = "";
  }

  taskResponse(response:Object){
    let state = "PENDING";
    let status = "";
    let perc = 0;
    let genres:Genre[] = [];
    for (let entry of Object.entries(response)){
      if (entry[0]=="state"){
        state = entry[1];
      } else if (entry[0]=="status"){
        status = entry[1];
      } else if (entry[0]=="perc"){
        perc = entry[1];
      } else if (entry[0]=="result"){
        perc = 100;
        for (let genre of Object.entries(entry[1])){
          if (typeof genre[1] === 'number'){
            let percent:number = genre[1];
            let newGenre:Genre = {name:genre[0],percentage:percent};
            genres.push(newGenre);
          }
        }
      }
  }
  let serverResult:ServerState = {state:state,status:status,perc:perc,result:genres};
  return serverResult;
}

  sendAudioBytes(event: any) {
    this.resetAll();
    let newBlob = event.target.files[0];
    this.selectedFile = newBlob.name;
    this.postBlob(newBlob);
  }

  async postBlob(data: Blob) {
    this.uploading = true;
    this.showResult = false;
    this.progressStatus = "Transferring data...";
    this.progressPerc = 5;

    if (data.size / 1024 / 1024 > 20) {
      this.showWarning = true;
    }

    this.http.post(`http://${this.myIp}/audiosample`, data)
      .toPromise()
      .then(async response => {

        let statusId = Object.values(response)[0];
        let reqState:ServerState = {state:"PENDING",status:"",perc:0,result:[]};
        let counter = 0;
        while (reqState.state!="SUCCESS" && counter<=100){
          this.http.get(`http://${this.myIp}/${statusId}`).toPromise()
          .then(value =>{
            reqState =  this.taskResponse(value);
            this.progressStatus = reqState.status;
            this.progressPerc = reqState.perc;
          })
          .catch(err => {
            this.errorText = err.error;
            this.showError = true;
          })
          await this.delay(500);
          counter += 1;
        }

        this.showText = this.evaluateResults(reqState.result);
        this.showResult = true;
        this.showWarning = false;

      })
      .catch(err => {
        this.errorText = err.error;
        this.showError = true;
      })
      .finally(() => this.uploading = false)
  }

  sortGenres(genre1: Genre, genre2: Genre) {
    if (genre1.percentage < genre2.percentage) {
      return 1;
    }
    if (genre1.percentage > genre2.percentage) {
      return -1;
    }
    return 0;
  }

  evaluateResults(genres: Genre[]): string {
    let result = "";
    genres.sort(this.sortGenres);

    if (genres[0].percentage > 60) {
      result = `This sounds like <strong>${genres[0].name}</strong> to me!`;
    } else if ((genres[0].percentage + genres[1].percentage) > 60) {
      result = `Looks like this is a mix between <strong>${genres[0].name}</strong> and <strong>${genres[1].name}</strong>.`
    } else if ((genres[0].percentage + genres[1].percentage + genres[2].percentage) > 60) {
      result = `Looks like this is a mix between <strong>${genres[0].name}</strong>, <strong>${genres[1].name}</strong> and <strong>${genres[2].name}</strong>.`
    } else {
      result = "We couldn't find a good match for this one :(";
    }

    return result;
  }

}
