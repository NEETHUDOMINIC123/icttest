import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtestimonialComponent } from './viewtestimonial.component';

describe('ViewtestimonialComponent', () => {
  let component: ViewtestimonialComponent;
  let fixture: ComponentFixture<ViewtestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
