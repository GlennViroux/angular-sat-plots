import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Config } from '../config';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configSource:Subject<Config>;
  configObservable:Observable<Config>;
  drawingSource:Subject<boolean>;
  drawingObservable:Observable<boolean>;
  serverSource:Subject<boolean>;
  serverObservable:Observable<boolean>;

  constructor() {
    const subject = new Subject<Config>();
    this.configSource = subject;
    this.configObservable = subject.asObservable();
    const drawingSubject = new Subject<boolean>();
    this.drawingSource = drawingSubject;
    this.drawingObservable = drawingSubject.asObservable();
    const serverSubject = new Subject<boolean>();
    this.serverSource = serverSubject;
    this.serverObservable = serverSubject.asObservable();
  }

  submitConfig(newConfig:Config){
    this.configSource.next(newConfig);
  }

  submitServerInfo(newInfo:boolean){
    this.serverSource.next(newInfo);
  }

  drawingComplete(){
    this.drawingSource.next(true);
  }
}
