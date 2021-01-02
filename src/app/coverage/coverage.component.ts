import { Component, OnInit } from '@angular/core';

import { E21Points, E21Polygon, E21LineString, IGSStations } from '../data';
import { WorldGeoJSON } from '../data/world_geo';

import * as d3 from 'd3';
import * as d3Geo from 'd3-geo-voronoi';
//const d3Geo = require('d3-geo-voronoi');

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})
export class CoverageComponent implements OnInit {

  svg: any;
  g: any;
  width: any;
  height: any;
  projection:any;
  path: any;
  tooltip: any;
  satTrack: any;
  currentProperties:any;
  currentSatCircle:any;
  voronoi:any;
  voronoiGrid:any;
  satMoving:boolean = false;
  satTrackTime:number = 0;
  margin: any = { top: 0, right: 0, bottom: 0, left: 0 };

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.bottom - this.margin.top;
  }

  ngOnInit(): void {
    //this.playSat();

    this.initSvg();  
    
    this.drawCountries().then((_) => {
      this.drawGraticule();
      this.drawSatTrack();
      this.drawSatPositions();
      this.drawMovingSat();
      this.drawIgsStations();
      this.drawSatStationConnections();
    })
  }

  initSvg() {
    this.svg = d3.select("#coverage")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 900 500")
      .attr("display", "block");

    this.g = this.svg.append("g")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

    this.tooltip = d3.select("#coverage")
      .append("div")
      .style("position", "absolute")
      .style("opacity", 0)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    this.projection = d3.geoNaturalEarth1()
      .translate([this.width / 2, this.height / 2])
      .scale(150)
      .rotate([0,0,0]);
    this.path = d3.geoPath().projection(this.projection);
  }

  async drawCountries() {
    //let pathData: any = <any>await d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson");
    this.g.selectAll("countries")
      .data(WorldGeoJSON.features)
      .join("path")
      .attr("d", this.path)
      .attr("fill", "steelblue")
      .style("stroke", "white")
      .style("stroke-width", "0.5")
  }

  drawGraticule() {
    let graticule: any = d3.geoGraticule()
      .step([10, 10]);

    this.g.selectAll("graticule")
      .data(graticule.lines())
      .join("path")
      .attr("d", this.path)
      .attr("fill", "none")
      .style("stroke", "black")
      .style("stroke-width", "0.3")
      .style("opacity", "0.3")
  }

  drawSatTrack() {
    let newPath:any = this.g.append("path")
      .data(E21LineString.features)
      .join("path")
      .attr("d", this.path)
      .style("stroke", "coral")
      .style("stroke-width", "1.5")
      .style("opacity","0.7")
      .attr("fill","none")

    this.satTrack = newPath.node();
  }
 
  drawSatPositions() {
    this.voronoi = d3Geo.geoVoronoi(E21Points.features);
    
    this.voronoiGrid = this.g.selectAll("voronoiGrid")
    .data(this.voronoi.polygons().features)
    .join("path")
      .attr("d",this.path)
      .style("opacity","0")
      /*
      .on("mouseover", (event: any, i: any) => {
        this.tooltip
        .style("opacity", "1");
      })
      .on("mousemove", (event: any, i: any) => {
        this.tooltip.html(
          i.properties.site.properties.number_stations_in_view
          +"<br>"+
          i.properties.site.properties.stations_in_view)
          .style("left", event.offsetX + 10 + "px")
          .style("top", event.offsetY + "px");
      })
      .on("mouseleave", (event: any, i: any) => {
        this.tooltip
        .style("opacity", "0");
      })
      */
  }

  drawMovingSat() {
    let satTrackLength:number = this.satTrack.getTotalLength();
    let r:any = d3.interpolate(0,satTrackLength);
    let point:any = this.satTrack.getPointAtLength((r(this.satTrackTime/1000)));
    this.currentSatCircle = this.g.append("circle")
    .attr("cx",point.x)
    .attr("cy",point.y)
    .attr("r",6)
    .style("fill","darkorange")
    .on("mouseover", (event: any, i: any) => {
      this.tooltip
      .style("opacity", "1");
    })
    .on("mousemove", (event: any, i: any) => {
      this.updateCurrentProperties()
      this.tooltip.html(
        "Epoch: "+this.currentProperties.epoch
        +"<br>"+
        "Stations in view: "+this.currentProperties.stations_in_view
        )
        .style("left", event.offsetX + 10 + "px")
        .style("top", event.offsetY + "px");
    })
    .on("mouseleave", (event: any, i: any) => {
      this.tooltip
      .style("opacity", "0");
    })
  }

  moveSat(t:number){
    this.satTrackTime = t;
    let satTrackLength:number = this.satTrack.getTotalLength();
    let r:any = d3.interpolate(0,satTrackLength);
    let point:any = this.satTrack.getPointAtLength((r(this.satTrackTime/1000)));
    this.currentSatCircle.attr("cx",point.x)
    .attr("cy",point.y)

    this.drawSatStationConnections();

  }

  sleep(ms:number){
    return new Promise( resolve => {setTimeout(resolve,ms)});
  }

  async playSat(){
    if (!this.satMoving){
      this.satMoving = true;
      if (this.satTrackTime>=1000){
        this.satTrackTime=0;
      }
  
      while (this.satTrackTime<=1000 && this.satMoving){
        await this.sleep(50);
        this.satTrackTime = this.satTrackTime+1;
        this.moveSat(this.satTrackTime)
      }
      this.satMoving = false;
    }
  }

  stopSat(){
    this.satMoving = false;
  }

  drawIgsStations(){
    let configuredStations:string = "ABMF ZAMB RBAY RABT RCMN UCLU UCAL MRL2 METG GRAS GOLD"
    this.g.selectAll("igsStations")
    .data(IGSStations.features.filter((d:any)=>{
      return configuredStations.includes(d.properties.station);
    }))
    .join("circle")
      //.attr("d",this.path.pointRadius(4))
      .attr("cx",(d:any)=>{return this.projection(d.geometry.coordinates)[0]})
      .attr("cy",(d:any)=>{return this.projection(d.geometry.coordinates)[1]})
      .attr("r",4)
      .style("fill","crimson")
      .on("mouseover", (event: any, i: any) => {
        this.tooltip
        .style("opacity", "1");

        console.log(event.currentTarget);
        
        d3.select(event.currentTarget)
        .transition()
        .duration(100)
        .attr("r","10");
        
        
      })
      .on("mousemove", (event: any, i: any) => {
        this.tooltip.html(
          "Station name: "+i.properties.station
          +"<br>"+
          "Receiver type: "+i.properties.receiver
          +"<br>"+
          "Antenna type: "+i.properties.antenna
          +"<br>"+
          "Clock type: "+i.properties.clock
          )
          .style("left", event.offsetX + 10 + "px")
          .style("top", event.offsetY + "px");
      })
      .on("mouseleave", (event: any, i: any) => {
        this.tooltip
        .style("opacity", "0");

        d3.select(event.currentTarget)
        .transition()
        .duration(100)
        .attr("r","4");
      })
  }

  updateCurrentProperties(){
    let x = this.currentSatCircle.attr("cx");
    let y = this.currentSatCircle.attr("cy");
    let inverted = this.projection.invert([x,y]);
    let foundIndex = this.voronoi.find(inverted[0],inverted[1]);
    let foundFeature:any = this.voronoi.polygons().features[foundIndex];

    this.currentProperties = foundFeature.properties.site.properties;

    //this.voronoiGrid._groups[0][foundIndex].style.opacity = 1;
  }

  getCurrentSatPoint(){
    let x = this.currentSatCircle.attr("cx");
    let y = this.currentSatCircle.attr("cy");
    let currentSatPoint = [+x,+y];
    return currentSatPoint;
  }

  drawSatStationConnections(){
    d3.selectAll(".connection-lines").remove();

    let currentSatPoint = this.getCurrentSatPoint();
    this.updateCurrentProperties();
    let stationsInView:string = this.currentProperties.stations_in_view;
    let filteredStations:any[] = IGSStations.features.filter((d:any)=>{
      return stationsInView.includes(d.properties.station);
    });

    let links:any[] = [];
    filteredStations.forEach((station:any)=>{
      let toPush:any = {
        type:"LineString",
        coordinates:[this.projection.invert(currentSatPoint),station.geometry.coordinates]
      }
      links.push(toPush);
    })

    this.g.selectAll("connectionlines")
    .data(links)
    .join("path")
      .attr("d",this.path)
      .attr("class","connection-lines")
      .attr("fill","none")
      .style("stroke","darkorange")
      .style("opacity","0.9")
      .style("stroke-width","2")

  }
}
