import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHomepageComponent } from './desktop-homepage.component';

describe('DesktopHomepageComponent', () => {
  let component: DesktopHomepageComponent;
  let fixture: ComponentFixture<DesktopHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
