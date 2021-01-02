import { Component, OnInit } from '@angular/core';

import { LatLonPoints } from '../data';

import * as d3 from "d3";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  svg:any;
  g:any;
  width:number;
  height:number;

  yaw:number = 0;
  //margin:any = {top:20,left:20,bottom:20,right:20};
  margin:any= { top: 10, right: 0, bottom: 10, left: 0 };

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
   }

  ngOnInit(): void {
    this.initSvg();
    this.drawMap();
  }

  setYaw(value:string){
    this.yaw = +value;
  }

  initSvg(){
    this.svg = d3.select("#myMapChart")
    .append("svg")
    .attr("width","100%")
    .attr("height","100%")
    .attr("viewBox",`0 0 900 500`)
    .style("display","block")
    .style("border","1px solid green");

    this.g = this.svg.append("g")
    .attr("transform",`translate(${this.margin.left},${this.margin.top})`);
  }

  async drawMap(){
    //var projection = d3.geoEqualEarth()
    var projection = d3.geoOrthographic()
    .translate([this.width/2,this.height/2])
    .scale(250)
    .rotate([this.yaw,0,0]);

        
    var colorScale = d3.scaleThreshold<number,string>()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)"]);

    let pathData:any = <any>await d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson");
    let popData:any[] = <any[]>await d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv");

    const newg = this.g.append("g");

    newg.selectAll("path")
    .data(pathData.features)
    .join("path")
      //.attr("fill","steelblue")
      .attr("d",d3.geoPath().projection(projection))
      .style("stroke","white")
      .style("stroke-width","0.5")
      .style("opacity","0.7")
      .on("mouseover",(event:any,i:any)=>{
        d3.select(event.currentTarget)
        .style("stroke-width","1.5")
        .style("opacity","1");
        })
      .on("mouseout",(event:any,i:any)=>{
        d3.select(event.currentTarget)
        .style("stroke-width","0.5")
        .style("opacity","0.7");
        })
      .on("click",(event:any,i:any)=>{
        })
    
    newg.selectAll("path")
    .attr("fill",(d:any) => {
      let result = 0;
      popData.forEach((element:any) => {
        if (element.code==d.id){
          result = element.pop;
        }
      });
      return colorScale(result);
    })

    let graticule = d3.geoGraticule()
    .step([10,10]);

    newg.selectAll("graticule")
    .data(graticule.lines())
    .join("path")
      .attr("d",d3.geoPath().projection(projection))
      .attr("fill","none")
      .style("stroke-width","0.5")
      .style("stroke","black")
      .style("opacity","0.3")

    newg.selectAll(".cities")
    .data(LatLonPoints.features)
    .join("path")
    .attr("d",d3.geoPath().projection(projection).pointRadius(4))
    .attr("class","glennypoints")
    .attr("fill","red")
  }
}
