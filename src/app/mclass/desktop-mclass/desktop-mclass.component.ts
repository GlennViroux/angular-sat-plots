import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { ServerService } from 'src/app/services/server.service';

declare var MediaRecorder: any;

export interface Genre {
  name:string,
  percentage:number
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
  myrecorder:any;
  audioChunks:any;
  audioBlob:any;

  elapsed_time = "00:00:00:000";
  start_time = moment();

  recording = false;
  uploading = false;
  showResult = false;
  showError = false;
  showWarning = false;
  showText = "";
  errorText = "";
  selectedFile = "";

  myIp = "";

  constructor(private http:HttpClient,serverService:ServerService) {
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
      this.recording = true;
      this.makeSquare();
      this.recordAudio();

    }
  }

  async playTimer() {
    this.start_time = moment();
    
    while (this.recording) {
      await this.delay(30);
      let diff = moment().diff(this.start_time, "milliseconds");
      this.elapsed_time = moment.duration(diff, 'milliseconds').format("HH:mm:ss:SSS", { trim: false });
    }
  }

  recordAudio(){
    navigator.mediaDevices.getUserMedia({audio:true})
    .then(stream => {
      this.myrecorder = new MediaRecorder(stream);
      this.playTimer();
      this.myrecorder.start();

      this.audioChunks = [];
      this.myrecorder.addEventListener("dataavailable", (event:any) => {
        this.audioChunks.push(event.data);
      });

      this.myrecorder.addEventListener('stop', () => {
        this.audioBlob = new Blob(this.audioChunks,{type:"audio/wav"});
        this.postBlob(this.audioBlob);
      })

    });

  }

  stopRecording(){
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

  resetAll(){
    this.recording = false;
    this.uploading = false;
    this.showResult = false;
    this.showError = false;
    this.showWarning = false;
    this.showText = "";
    this.errorText = "";
    this.selectedFile = "";
  }

  sendAudioBytes(event:any){
    let newBlob = event.target.files[0];
    this.selectedFile = newBlob.name;
    this.postBlob(newBlob);
  }

  postBlob(data:Blob){
    this.uploading = true;
    this.showResult = false;

    if (data.size/1024/1024>20){
      this.showWarning = true;
    }

    this.http.post(`http://${this.myIp}/audiosample`,data)
    .toPromise()
    .then(response => {
      let allResults:Genre[] = [];
      for (let entry of Object.entries(response)){
        let genre:Genre = {name:entry[0],percentage:entry[1]};
        allResults.push(genre);
      }
      this.showText = this.evaluateResults(allResults);
      this.showResult = true;
      this.showWarning = false;

    })
    .catch( err => {
      this.errorText = err.error;
      this.showError = true;
    })
    .finally(() => this.uploading=false)
  }

  sortGenres(genre1:Genre,genre2:Genre){
    if (genre1.percentage<genre2.percentage){
      return 1;
    }
    if (genre1.percentage>genre2.percentage){
      return -1;
    }
    return 0;
  }

  evaluateResults(genres:Genre[]):string{
    let result = "";
    genres.sort(this.sortGenres);

    if (genres[0].percentage>60){
      result = `This sounds like <strong>${genres[0].name}</strong> to me!`; 
    } else if ((genres[0].percentage+genres[1].percentage)>60){
      result = `Looks like this is a mix between <strong>${genres[0].name}</strong> and <strong>${genres[1].name}</strong>.`
    } else if ((genres[0].percentage+genres[1].percentage+genres[2].percentage)>60){
      result = `Looks like this is a mix between <strong>${genres[0].name}</strong>, <strong>${genres[1].name}</strong> and <strong>${genres[2].name}</strong>.`
    } else {
      result = "We couldn't find a good match for this one :(";
    }

    return result;
  }

}
