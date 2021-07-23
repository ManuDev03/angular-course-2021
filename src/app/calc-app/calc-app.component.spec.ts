import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcAppComponent } from './calc-app.component';

describe('CalcAppComponent', () => {
  let component: CalcAppComponent;
  let fixture: ComponentFixture<CalcAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
