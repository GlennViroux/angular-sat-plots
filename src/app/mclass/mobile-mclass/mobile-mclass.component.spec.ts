import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMclassComponent } from './mobile-mclass.component';

describe('MobileMclassComponent', () => {
  let component: MobileMclassComponent;
  let fixture: ComponentFixture<MobileMclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
