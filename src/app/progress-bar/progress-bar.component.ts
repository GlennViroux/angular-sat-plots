import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() progress = 0;
  @Input() status = "No status";
  @Input() fixcolors = false;
  total = 100;
  color = "red";
  constructor() { }

  ngOnInit(): void {
    if (this.progress > this.total) {
      this.progress = 100;
      this.total = 100;
    }
    this.setColors();
  }

  setColors(){
    if (!this.fixcolors) {
      if (this.progress < 55) {
        this.color = 'red';
      } else if (this.progress < 75) {
        this.color = 'yellow';
      } else {
        this.color = 'green';
      }
    } else {
      this.color = "mycolor";
    }
  }

  ngOnChanges(changes:SimpleChanges){
    this.setColors();
  }

  


}
