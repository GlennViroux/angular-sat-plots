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

  constructor() {
    const subject = new Subject<Config>();
    this.configSource = subject;
    this.configObservable = subject.asObservable();
    const drawingSubject = new Subject<boolean>();
    this.drawingSource = drawingSubject;
    this.drawingObservable = drawingSubject.asObservable();
  }

  submitConfig(newConfig:Config){
    this.configSource.next(newConfig);
  }

  drawingComplete(){
    this.drawingSource.next(true);
  }
}
