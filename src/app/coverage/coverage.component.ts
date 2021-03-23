import { Component, OnInit } from '@angular/core';

import { Config } from '../config';
import * as d3 from 'd3';
import * as d3Geo from 'd3-geo-voronoi';
import { ConfigService } from '../services/config.service';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})
export class CoverageComponent implements OnInit {

  serverUp:boolean = true;
  plotConfig:Config = new Config();
  renderComplete:boolean = false;
  configPristine:boolean = true;
  igsStationsData:any;
  enableConfig:{[param:string]:boolean} = {};
  
  svg: any;
  g: any;
  projection: any;
  path: any;
  tooltip: any;
  satTips:{[prn:string]:any} = {};
  statTips:{[station:string]:any} = {};
  satTracks: {[prn:string]:any} = {};
  currentTime:any = "";
  currentProperties: {[prn:string]:any} = {};
  currentSatCircles: {[prn:string]:any} = {};
  voronois: {[prn:string]:any} = {};
  satPointsData: {[prn:string]:any} = {};
  voronoiGrids: {[prn:string]:any} = {};
  satsMoving: boolean = false;
  satTrackTime: number = 0;
  width: number;
  height: number;
  outer_width: number;
  outer_height: number;
  margin: any = { top: 10, right: 10, bottom: 10, left: 10 };

  svg_times: any;
  g_times: any;
  x: any;
  y: any;
  width_times: number;
  height_times: number;
  outer_width_times: number;
  outer_height_times: number;
  data: {[prn:string]:any} = {};
  timeseriesTracks: {[prn:string]:any} = {};
  currentSatCircleTimes: {[prn:string]:any} = {};
  satTipsTimes: {[prn:string]:any} = {};
  margin_times: any = { top: 40, right: 20, bottom: 50, left: 60 };

  myIp = "";

  constructor(configService:ConfigService, serverService:ServerService) {
    serverService.getIp().then(value => {
      this.myIp = value;
    })

    this.outer_width = 1150;
    this.outer_height = 700
    this.width = this.outer_width - this.margin.left - this.margin.right;
    this.height = this.outer_height - this.margin.bottom - this.margin.top;

    this.outer_width_times = 700;
    this.outer_height_times = 500;
    this.width_times = this.outer_width_times - this.margin_times.left - this.margin_times.right;
    this.height_times = this.outer_height_times - this.margin_times.bottom - this.margin_times.top;

    this.enableConfig["connectionLines"] = true;
    this.enableConfig["stationLabels"] = false;

    configService.configObservable.subscribe((newConfig:any)=>{
      this.plotConfig = newConfig;
      this.configPristine = false;
      this.renderComplete = false;
      this.drawAll().then((_:any) => {
        configService.drawingComplete();
      });
    });

    configService.serverObservable.subscribe((newServerInfo:boolean) => {
      this.serverUp = newServerInfo;
    })
    
  }

  ngOnInit(){}

  async drawAll() {

    this.initSvg();

    //GeoMap Plot
    await this.drawCountries();
    this.drawGraticule();
    await this.drawSatTrack();
    await this.drawVoronoi();
    this.drawMovingSat();
    await this.drawIgsStations();
    if (this.enableConfig["connectionLines"]){
      this.drawSatStationConnections();
    }
    
    //Timeseries Plot
    this.getDataTimeseries();
    this.drawAxes();
    this.drawGrid();
    this.drawLines();
    this.drawMovingSatTimes();

    this.renderComplete = true;
  }

  initSvg() {
    //Clean all
    d3.selectAll("#coverage svg").remove();
    d3.selectAll("#coverage g").remove();
    d3.selectAll("#coverage div").remove();
    d3.selectAll("#timeseriesPlot svg").remove();
    d3.selectAll("#timeseriesPlot g").remove();
    d3.selectAll("#timeseriesPlot div").remove();

    //GeoMap plot
    this.svg = d3.select("#coverage")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .attr("viewBox", `0 0 ${this.outer_width} ${this.outer_height}`)
      .attr("display", "block");

    this.g = this.svg.append("g")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

    this.g.append("text")
    .attr("transform",`translate(${this.width/2},20)`)
    .style("text-anchor","middle")
    .style("font-size","xx-large")
    .text("World view")

    this.tooltip = d3.select("#coverage")
      .append("div")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("opacity", 0)

    this.projection = d3.geoNaturalEarth1()
      .translate([this.width / 2, this.height / 2])
      .scale(210)
      .rotate([0, 0, 0]);
    this.path = d3.geoPath().projection(this.projection);

    //Timeseries plot
    this.svg_times = d3.select("#timeseriesPlot")
      .append("svg")
      .attr("width", this.width_times + this.margin_times.left + this.margin_times.right)
      .attr("height", this.height_times + this.margin_times.top + this.margin_times.bottom)
      .attr("viewBox", `0 0 ${this.outer_width_times} ${this.outer_height_times}`)
      .attr("display", "block");

    this.g_times = this.svg_times.append("g")
      .attr("transform", `translate(${this.margin_times.left},${this.margin_times.top})`);

    this.g_times.append("text")
      .attr("transform",`translate(${this.width_times/2},-10)`)
      .style("text-anchor","middle")
      .style("font-size","xx-large")
      .text("# stations in view by satellites")
  }

  //GeoMap Plot
  async drawCountries() {
    let pathData: any = <any>await d3.json(`http://${this.myIp}/earth`);
    this.g.selectAll("countries")
      .data(pathData.features)
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

  async drawSatTrack() {
    for (let prn of this.plotConfig.prns){
      let year:string = this.plotConfig.date.format("YYYY");
      let month:string = this.plotConfig.date.format("MM");
      let day:string = this.plotConfig.date.format("DD");
      let dataJSON: any = <any>await d3.json(`http://${this.myIp}/data/sat_track/${prn}?year=${year}&month=${month}&day=${day}`);
  
      let newPath:any = this.g.append("path")
        .data(dataJSON.features)
        .join("path")
        .attr("d", this.path)
        .style("stroke", "darkgreen")
        .style("stroke-width", "1.5")
        .style("opacity", "0.7")
        .attr("fill", "none")
  
      this.satTracks[prn] = newPath.node();
    }

  }

  async drawVoronoi() {
    for (let prn of this.plotConfig.prns){
      let year:string = this.plotConfig.date.format("YYYY");
      let month:string = this.plotConfig.date.format("MM");
      let day:string = this.plotConfig.date.format("DD");
  
      let dataJSON: any = <any>await d3.json(`http://${this.myIp}/data/sat_points/${prn}?year=${year}&month=${month}&day=${day}`);

      for (let feature of dataJSON.features){
        let stationsInViewArray:string[] = feature.properties.stations_in_view.split(" ");
        let filteredStationsInView:string[] = stationsInViewArray.filter((station:string) => {
          return this.plotConfig.stations.indexOf(station)>-1;
        });
        feature.properties.stations_in_view = filteredStationsInView.join(" ");
        feature.properties.number_stations_in_view = filteredStationsInView.length;
      }

      this.satPointsData[prn] = dataJSON;
      this.voronois[prn] = d3Geo.geoVoronoi(dataJSON.features);
      this.voronoiGrids[prn] = this.g.selectAll("voronoiGrid")
        .data(this.voronois[prn].polygons().features)
        .join("path")
        .attr("d", this.path)
        .style("opacity", "0")
    }

  }

  drawMovingSat() {
    for (let prn of this.plotConfig.prns){
      let thisTrack = this.satTracks[prn];

      let satTrackLength: number = thisTrack.getTotalLength();
      let r: any = d3.interpolate(0, satTrackLength);
      let point: any = this.satTracks[prn].getPointAtLength(r(this.satTrackTime / 200));
      this.currentSatCircles[prn] = this.g.append("circle")
        .attr("cx", point.x)
        .attr("cy", point.y)
        .attr("r", 6)
        .style("fill", "darkorange")
        /*
        .on("mouseover", (event: any, i: any) => {
          this.tooltip
            .style("opacity", "1");
  
          d3.select(event.currentTarget)
            .attr("r", 11);
        })
        .on("mousemove", (event: any, i: any) => {
          this.updateCurrentProperties(prn);
          this.tooltip.html(
            "Epoch: " + this.currentProperties[prn].epoch
            + "<br>" +
            "Stations in view: " + this.currentProperties[prn].stations_in_view
          )
            .style("left", event.offsetX + 10 + "px")
            .style("top", event.offsetY + "px");
        })
        .on("mouseleave", (event: any, i: any) => {
          this.tooltip
            .style("opacity", "0");
  
          d3.select(event.currentTarget)
            .attr("r", 6);
        });
        */
        this.satTips[prn] = d3.select("#coverage")
        .append("div")
          .html(prn)
          .style("left",point.x - 30 + "px")
          .style("top",point.y + "px")
          .style("position", "absolute")
          .style("opacity", 1)
          .style("background-color", "white")
          .style("border", "solid")
          .style("border-width", "2px")
          .style("border-radius", "5px")
          .style("padding", "2px")
    }

  }

  moveSats(t: number) {
    for (let prn of this.plotConfig.prns){
      this.satTrackTime = t;

      //GeoMap
      let satTrackLength: number = this.satTracks[prn].getTotalLength();
      let r: any = d3.interpolate(0, satTrackLength);
      let point: any = this.satTracks[prn].getPointAtLength((r(this.satTrackTime / 200)));
      this.currentSatCircles[prn]
      .attr("cx", point.x)
      .attr("cy", point.y)
      this.satTips[prn]
      .style("left",point.x - 30 + "px")
      .style("top",point.y+"px")
      
  
      //Timeseries
      satTrackLength = this.timeseriesTracks[prn].getTotalLength();
      r = d3.interpolate(0, satTrackLength);
      point = this.timeseriesTracks[prn].getPointAtLength(r(this.satTrackTime / 200));
      this.currentSatCircleTimes[prn]
      .attr("cx", point.x)
      .attr("cy", point.y)
      this.satTipsTimes[prn]
      .style("left",point.x + 22 + "px")
      .style("top",point.y+"px")
    }
    if (this.enableConfig["connectionLines"]){
      this.drawSatStationConnections();
    }
    

  }

  sleep(ms: number) {
    return new Promise(resolve => { setTimeout(resolve, ms) });
  }

  async playSat() {
    if (!this.satsMoving) {
      this.satsMoving = true;
      if (this.satTrackTime >= 200) {
        this.satTrackTime = 0;
      }

      while (this.satTrackTime <= 200 && this.satsMoving) {
        await this.sleep(200);
        this.satTrackTime = this.satTrackTime + 0.7;
        this.moveSats(this.satTrackTime)
      }
      this.satsMoving = false;
    }
  }

  stopSat() {
    this.satsMoving = false;
  }

  async drawIgsStations() {
    let configuredStations: string[] = this.plotConfig.stations;
    let year:string = this.plotConfig.date.format("YYYY");
    let month:string = this.plotConfig.date.format("MM");
    let day:string = this.plotConfig.date.format("DD");
    let dataJSON: any = <any>await d3.json(`http://${this.myIp}/data/igs_stations/T01?year=${year}&month=${month}&day=${day}`);
    this.igsStationsData = dataJSON;
    this.igsStationsData.features = dataJSON.features.filter((d: any) => {
      return configuredStations.includes(d.properties.station);
    });

    this.g.selectAll("igsStations")
    .data(this.igsStationsData.features)
    .join("circle")
      .attr("cx", (d: any) => { return this.projection(d.geometry.coordinates)[0]})
      .attr("cy", (d: any) => { return this.projection(d.geometry.coordinates)[1]})
      .attr("r", 6)
      .attr("class",(d:any) => "station-"+d.properties.station)
      .style("fill", "crimson")

    this.g.selectAll("igsVoronoiGrid")
    .data(d3Geo.geoVoronoi(this.igsStationsData.features).polygons().features)
    .join("path")
      .attr("d",this.path)
      .style("opacity",0)
      .on("mouseover", (event: any, i: any) => {
        this.tooltip
          .style("opacity", "1");
        d3.select(".station-"+i.properties.site.properties.station)
          .transition()
          .duration(100)
          .attr("r", 13);
      })
      .on("mousemove", (event: any, i: any) => {
        this.tooltip.html(
          "Station name: " + i.properties.site.properties.station
          + "<br>" +
          "Receiver type: " + i.properties.site.properties.receiver
          + "<br>" +
          "Antenna type: " + i.properties.site.properties.antenna
          + "<br>" +
          "Clock type: " + i.properties.site.properties.clock
        )
          .style("left", event.offsetX + 10 + "px")
          .style("top", event.offsetY + "px");
      })
      .on("mouseleave", (event: any, i: any) => {
        this.tooltip
          .style("opacity", "0");
        d3.select(".station-"+i.properties.site.properties.station)
          .transition()
          .duration(100)
          .attr("r", 6);
      });
  }

  drawStationTips(){
    this.igsStationsData.features.forEach((feature:any) => {
      d3.select("#coverage")
      .append("div")
      .html(feature.properties.station)
      .attr("class","station-labels")
      .style("left", this.projection(feature.geometry.coordinates)[0]+12+"px")
      .style("top", this.projection(feature.geometry.coordinates)[1]+12+"px")
      .style("position", "absolute")
      .style("opacity", 1)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "2px")
    });
  }

  updateCurrentProperties(prn:string) {
    let x = this.currentSatCircles[prn].attr("cx");
    let y = this.currentSatCircles[prn].attr("cy");
    let inverted = this.projection.invert([x, y]);
    let foundIndex = this.voronois[prn].find(inverted[0], inverted[1]);
    let foundFeature: any = this.voronois[prn].polygons().features[foundIndex];

    this.currentProperties[prn] = foundFeature.properties.site.properties;
    this.currentTime = this.currentProperties[prn].epoch;
  }

  getCurrentSatPoint(prn:string) {
    let x = this.currentSatCircles[prn].attr("cx");
    let y = this.currentSatCircles[prn].attr("cy");
    let currentSatPoint = [+x, +y];
    return currentSatPoint;
  }

  drawSatStationConnections() {
    d3.selectAll(".connection-lines").remove();
    for (let prn of this.plotConfig.prns){
      let currentSatPoint = this.getCurrentSatPoint(prn);
      this.updateCurrentProperties(prn);
      let stationsInView: string = this.currentProperties[prn].stations_in_view;
      let filteredStations: any[] = this.igsStationsData.features.filter((d: any) => {
        let cond1:boolean = stationsInView.includes(d.properties.station);
        let cond2:boolean = this.plotConfig.stations.indexOf(d.properties.station)>-1;
        return cond1 && cond2;
      });
  
      let links: any[] = [];
      filteredStations.forEach((station: any) => {
        let toPush: any = {
          type: "LineString",
          coordinates: [this.projection.invert(currentSatPoint), station.geometry.coordinates]
        }
        links.push(toPush);
      })
  
      this.g.selectAll("connectionlines")
      .data(links)
      .join("path")
        .attr("d", this.path)
        .attr("class", "connection-lines")
        .attr("fill", "none")
        .style("stroke", "darkorange")
        .style("opacity", "0.9")
        .style("stroke-width", "2")
    }


  }

  //Timeseries plot
  getDataTimeseries(){
    for (let prn of this.plotConfig.prns){
      let newData = this.satPointsData[prn].features.map((feature:any) => {
        return {epoch:new Date(feature.properties.epoch),stations:feature.properties.number_stations_in_view}
      });
      this.data[prn] = newData;
    }
  }

  drawAxes() {
    this.x = d3.scaleTime().rangeRound([0, this.width_times]);
    this.y = d3.scaleLinear().rangeRound([this.height_times, 0]);
    let allEpochs = [];
    let allStations = [];
    for (let prn of this.plotConfig.prns){
      allEpochs.push(...this.data[prn].map((d:any) => d.epoch));
      allStations.push(...this.data[prn].map((d:any) => d.stations));
    }
    this.x.domain(d3.extent(allEpochs));
    this.y.domain(d3.extent(allStations));

    this.g_times.append("g")
      .attr("transform", `translate(0,${this.height_times})`)
      .attr("class", "xAxis")
      .call(d3.axisBottom(this.x))

    this.g_times.append("g")
      .attr("class", "yAxis")
      .call(d3.axisLeft(this.y))

    this.g_times.append("text")
      .attr("transform",
        "translate(" + (this.width_times / 2) + " ," +
        (this.height_times + this.margin.top + 30) + ")")
      .style("text-anchor", "middle")
      .text("Epoch");

    this.g_times.append("text")
      .attr("transform", `translate(${20 - this.margin_times.left},${this.height_times / 2})rotate(-90)`)
      .style("text-anchor", "middle")
      .text("# Stations in view")

  }

  drawGrid() {
    this.g_times.append("g")
      .attr("class", "grid")
      .style("opacity", "0.2")
      .attr("transform", `translate(0,${this.height_times})`)
      .call(
        d3.axisBottom(this.x)
          .tickFormat((d: any, i: any) => '')
          .tickSize(-this.height_times)
          .ticks(10)
      );

    this.g_times.append("g")
      .attr("class", "grid")
      .style("opacity", "0.2")
      //.attr("transform",`translate(0,${this.height})`)
      .call(
        d3.axisLeft(this.y)
          .tickFormat((d: any, i: any) => '')
          .tickSize(-this.width_times)
          .ticks(10)
      );
  }

  drawLines() {
    for (let prn of this.plotConfig.prns){
      let newPath:any = this.g_times.append("path")
      .datum(this.data[prn])
      .attr("d", d3.line()
        .x((d: any) => this.x(d.epoch))
        .y((d: any) => this.y(d.stations))
      )
      .attr("fill", "none")
      .attr("stroke", "darkorange")
      .style("opacity", "0.8")
      .attr("stroke-width", "2");

      this.timeseriesTracks[prn] = newPath.node();
    }

  }

  drawMovingSatTimes() {
    for (let prn of this.plotConfig.prns){
      let satTrackLength: number = this.timeseriesTracks[prn].getTotalLength();
      let r: any = d3.interpolate(0, satTrackLength);
      let point: any = this.timeseriesTracks[prn].getPointAtLength(r(this.satTrackTime / 1000));
  
      this.currentSatCircleTimes[prn] = this.g_times.append("circle")
        .attr("cx", point.x)
        .attr("cy", point.y)
        .attr("r", 6)
        .style("fill", "darkorange")

      this.satTipsTimes[prn] = d3.select("#timeseriesPlot")
      .append("div")
        .html(prn)
        .style("left",point.x + 22 + "px")
        .style("top",point.y + "px")
        .style("position", "absolute")
        .style("opacity", 1)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "2px")
    }
  }

  setConnectionLines(event:any){
    if (event.srcElement.checked){
      this.drawSatStationConnections();
      this.enableConfig["connectionLines"] = true;
    } else {
      this.enableConfig["connectionLines"] = false;
      d3.selectAll(".connection-lines").remove();
    }
  }

  setStationLabels(event:any){
    if (event.srcElement.checked){
      this.drawStationTips();
      this.enableConfig["stationLabels"] = true;
    } else {
      this.enableConfig["stationLables"] = false;
      d3.selectAll(".station-labels").remove();
    }
  }

}
