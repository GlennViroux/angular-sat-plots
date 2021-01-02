import { Component, OnInit } from '@angular/core';

import { LatLonPoints } from '../data';

import * as d3 from "d3";

@Component({
  selector: 'app-sats',
  templateUrl: './sats.component.html',
  styleUrls: ['./sats.component.scss']
})
export class SatsComponent implements OnInit {

  svg:any;
  g:any;
  width:any;
  height:any;
  margin:any= { top: 10, right: 0, bottom: 10, left: 0 };

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
   }

  ngOnInit(): void {
    this.initSvg();
    this.drawMap();
  }

  initSvg(){
    this.svg = d3.select("#satPlot")
    .append("svg")
    .attr("width","100%")
    .attr("height","100%")
    .attr("viewBox","0 0 900 500")
    .attr("display","block");

    this.g = this.svg.append("g")
    .attr("transform",`translate(${this.margin.left},${this.margin.top})`)
  }

  async drawMap(){
    //Prepare projection and datasets
    let projection = d3.geoNaturalEarth1()
    .translate([this.width/2,this.height/2])
    .scale(150);

    let graticule = d3.geoGraticule()
    .step([10,10])

    let links:any[] = [];
    let pointA:any;
    let pointB:any;
    d3.pairs(LatLonPoints.features).forEach(([a,b]:any)=>{
      pointA = a.geometry.coordinates;
      pointB = b.geometry.coordinates;
      let toPush:any = {type:"LineString",coordinates:[pointA,pointB]}
      links.push(toPush);
    })

    let pathData:any = <any>await d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson");

    //Declare path
    let path = d3.geoPath().projection(projection);

    //Draw map
    const newg = this.g.append("g");

    newg.selectAll("path")
    .data(pathData.features)
    .join("path")
      .attr("d",path)
      .attr("fill","steelblue")
      .style("stroke","white")
      .style("stroke-width","0.5");

    newg.selectAll("graticule")
    .data(graticule.lines())
    .join("path")
      .attr("d",path)
      .attr("fill","none")
      .style("stroke","grey")
      .style("stroke-width","0.5")
      .style("opacity","0.3");

    newg.selectAll(".sattrack")
    .data(links)
    .join("path")
      .attr("d",path)
      .attr("fill","none")
      .style("stroke","red")
      .style("stroke-width","1")

    let tooltip = d3.select("#satPlot")
    .append("div")
      .attr("position","absolute")
      .attr("class", "tooltip")
      .style("opacity", 1)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    newg.selectAll("points")
    .data(LatLonPoints.features)
    .join("path")
      .attr("d",path.pointRadius(4))
      .attr("fill","yellow")
      .on("mouseover",(event:any,i:any)=>{
        tooltip.transition()
        .duration(200)
        .style("opacity","1")
      })
      .on("mousemove",(event:any,i:any)=>{
        tooltip.html(i.properties.name)
        .style("left", event.offsetX+10 + "px")
        .style("top", event.offsetY + "px")
      })
      .on("mouseleave",(event:any,i:any)=>{
        tooltip.style("opacity","0");
      })
  }
}
