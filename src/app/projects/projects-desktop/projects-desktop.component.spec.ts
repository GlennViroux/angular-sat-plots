import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDesktopComponent } from './projects-desktop.component';

describe('ProjectsDesktopComponent', () => {
  let component: ProjectsDesktopComponent;
  let fixture: ComponentFixture<ProjectsDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
