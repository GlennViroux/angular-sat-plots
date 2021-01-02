import { Component, OnInit } from '@angular/core';

import { ConstStockData } from '../data';

import * as d3 from "d3";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  currentRate = 8;
  title = 'D3 Barchart with Angular 10';
  width: number;
  height: number;
  margin = { top: 50, right: 20, bottom: 30, left: 50 };
  x: any;
  y: any;
  svg: any;
  g: any;

  path: any;

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  initSvg() {
    this.svg = d3.select('#myChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');

    this.g = this.svg.append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
  }

  initAxis() {
    this.x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(ConstStockData.map((d) => d.date));
    this.y.domain(d3.extent(ConstStockData.map((d) => d.price)));
  }

  drawAxis() {
    this.g.append('g')
      .attr('transform', `translate(0,${this.height})`)
      .call(d3.axisBottom(this.x));
    this.g.append('g')
      .call(d3.axisLeft(this.y));
  }

  drawBars() {

    //Add the line path
    this.path = this.g.append("path")
      .datum(ConstStockData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x((d: any) => { return this.x(d.date) })
        .y((d: any) => { return this.y(d.price) })
      )

    //Add animation for line path
    let totalLength: number = this.path.node().getTotalLength();
    this.path.attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      .attr("stroke-dashoffset", 0);

    //Add scatter dots
    this.g.append("g")
      .selectAll("dot")
      .data(ConstStockData)
      .join("circle")
      .attr("cx", (d: any) => { return this.x(d.date) })
      .attr("cy", (d: any) => { return this.y(d.price) })
      .attr("r", 3)
      .style("fill", "steelblue")

    //Add invisible tooltips
    const tooltips = this.g.append("text")
      .attr("class", "tooltip")
      .style("opacity", 0)

    //Add invisible bars
    this.g.append("g")
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .selectAll("rect")
      .data(d3.pairs(ConstStockData))
      .join("rect")
      .attr("x", ([a, _]: any) => { return this.x(a.date); })
      .attr("height", this.height)
      .attr("width", ([a, b]: any) => {
        return this.x(b.date) - this.x(a.date)
      })
      .on("mouseover", (event: any, [a, b]: any) => {
        tooltips
          .transition()
          .duration(200)
          .style("opacity", "1")
          .attr("transform", `translate(${this.x(a.date)},${this.y(a.price)})`);

        tooltips
          .append("tspan")
          .text("x:"+a.date)
          .attr("x",0)
          .attr("dy","1.1em");
        tooltips
          .append("tspan")
          .text("y:"+a.price)
          .attr("x",0)
          .attr("dy","1.1em")})

      .on("mouseout", () => {
        tooltips.selectAll("tspan").remove();
      })
      


    //Add title
    this.svg.append("text")
      .attr("x", (this.width / 2))
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .text("GLENNY")
  }


  transTrigger() {
    d3.selectAll("circle")
      .transition()
      .duration(2000)
      .attr("cy", (d: any) => { return this.y(d.price) - 30; })
      .delay((d: any) => {
        return this.y(d.price) * 10;
      })
  }

  revealClick() {
    let totalLength: number = this.path.node().getTotalLength();
    this.path
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      .attr("stroke-dashoffset", 0);

  }

}
