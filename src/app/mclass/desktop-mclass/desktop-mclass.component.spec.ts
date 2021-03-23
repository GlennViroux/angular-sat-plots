import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMclassComponent } from './desktop-mclass.component';

describe('DesktopMclassComponent', () => {
  let component: DesktopMclassComponent;
  let fixture: ComponentFixture<DesktopMclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopMclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
