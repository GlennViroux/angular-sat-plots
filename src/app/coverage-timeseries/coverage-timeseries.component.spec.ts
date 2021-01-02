import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageTimeseriesComponent } from './coverage-timeseries.component';

describe('CoverageTimeseriesComponent', () => {
  let component: CoverageTimeseriesComponent;
  let fixture: ComponentFixture<CoverageTimeseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageTimeseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageTimeseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
