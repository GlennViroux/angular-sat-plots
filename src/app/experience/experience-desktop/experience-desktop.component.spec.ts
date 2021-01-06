import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDesktopComponent } from './experience-desktop.component';

describe('ExperienceDesktopComponent', () => {
  let component: ExperienceDesktopComponent;
  let fixture: ComponentFixture<ExperienceDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
