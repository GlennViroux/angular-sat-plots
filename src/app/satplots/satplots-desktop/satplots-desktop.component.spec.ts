import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatplotsDesktopComponent } from './satplots-desktop.component';

describe('SatplotsDesktopComponent', () => {
  let component: SatplotsDesktopComponent;
  let fixture: ComponentFixture<SatplotsDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatplotsDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatplotsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
