import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceMobileComponent } from './experience-mobile.component';

describe('ExperienceMobileComponent', () => {
  let component: ExperienceMobileComponent;
  let fixture: ComponentFixture<ExperienceMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
