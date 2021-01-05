import { Component, OnInit } from '@angular/core';

import { TimeSeries } from '../data';

import * as d3 from 'd3';

@Component({
  selector: 'app-coverage-timeseries',
  templateUrl: './coverage-timeseries.component.html',
  styleUrls: ['./coverage-timeseries.component.scss']
})
export class CoverageTimeseriesComponent implements OnInit {

  svg: any;
  g: any;
  x: any;
  y: any;
  width: number;
  height: number;
  outer_width: number;
  outer_height: number;
  data: any[];
  margin: any = { top: 10, right: 100, bottom: 30, left: 100 };

  constructor() {
    this.outer_width = 1300;
    this.outer_height = 500
    this.width = this.outer_width - this.margin.left - this.margin.right;
    this.height = this.outer_height - this.margin.bottom - this.margin.top;

    let newData: any[] = [];
    TimeSeries.forEach((element: any) => {
      let newDate: Date = new Date(element.epoch);
      let newObject = { epoch: newDate, stations: element.stations };
      newData.push(newObject);
    });
    this.data = newData;
  }

  ngOnInit(): void {

    this.initSvg();
    this.drawAxes();
    this.drawGrid();
    this.drawLine();
  }

  initSvg() {
    this.svg = d3.select("#timeseriesPlot")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      //.attr("width", "100%")
      //.attr("height", "100%")
      .attr("viewBox", `0 0 ${this.outer_width} ${this.outer_height}`)
      .attr("display", "block");

    this.g = this.svg.append("g")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);
  }

  drawAxes() {
    this.x = d3.scaleTime().rangeRound([0, this.width]);
    this.y = d3.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(d3.extent(this.data.map((d: any) => d.epoch)));
    this.y.domain(d3.extent(this.data.map((d: any) => d.stations)));

    this.g.append("g")
      .attr("transform", `translate(0,${this.height})`)
      .attr("class", "xAxis")
      .call(d3.axisBottom(this.x))

    this.g.append("g")
      .attr("class", "yAxis")
      .call(d3.axisLeft(this.y))
  }

  drawGrid() {
    this.g.append("g")
    .attr("class","grid")
    .style("opacity","0.2")
    .attr("transform",`translate(0,${this.height})`)
    .call(
      d3.axisBottom(this.x)
      .tickFormat((d:any,i:any)=> '')
      .tickSize(-this.height)
      .ticks(10)
    );

    this.g.append("g")
    .attr("class","grid")
    .style("opacity","0.2")
    //.attr("transform",`translate(0,${this.height})`)
    .call(
      d3.axisLeft(this.y)
      .tickFormat((d:any,i:any)=> '')
      .tickSize(-this.width)
      .ticks(10)
    );
    

  }

  drawLine() {
    this.g.append("path")
      .datum(this.data)
      .attr("d", d3.line()
        .x((d: any) => this.x(d.epoch))
        .y((d: any) => this.y(d.stations))
      )
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", "1")
  }

}
