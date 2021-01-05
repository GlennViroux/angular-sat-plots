import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list'

import { TestsComponent } from './tests/tests.component';
import { MapComponent } from './map/map.component';
import { SatsComponent } from './sats/sats.component';
import { CoverageComponent } from './coverage/coverage.component';
import { CoverageTimeseriesComponent } from './coverage-timeseries/coverage-timeseries.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    MapComponent,
    SatsComponent,
    CoverageComponent,
    CoverageTimeseriesComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatInputModule,
    MatListModule,
    NgbModalModule,
    NgbModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
