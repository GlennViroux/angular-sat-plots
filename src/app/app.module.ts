import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { MapComponent } from './map/map.component';
import { SatsComponent } from './sats/sats.component';
import { CoverageComponent } from './coverage/coverage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CoverageTimeseriesComponent } from './coverage-timeseries/coverage-timeseries.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    MapComponent,
    SatsComponent,
    CoverageComponent,
    CoverageTimeseriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
