import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatplotsMobileComponent } from './satplots-mobile.component';

describe('SatplotsMobileComponent', () => {
  let component: SatplotsMobileComponent;
  let fixture: ComponentFixture<SatplotsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatplotsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatplotsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
