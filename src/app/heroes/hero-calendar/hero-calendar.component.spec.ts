import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCalendarComponent } from './hero-calendar.component';

describe('HeroCalendarComponent', () => {
  let component: HeroCalendarComponent;
  let fixture: ComponentFixture<HeroCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
