import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatsComponent } from './sats.component';

describe('SatsComponent', () => {
  let component: SatsComponent;
  let fixture: ComponentFixture<SatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
