import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCalendarSecondComponent } from './hero-calendar-second.component';

describe('HeroCalendarSecondComponent', () => {
  let component: HeroCalendarSecondComponent;
  let fixture: ComponentFixture<HeroCalendarSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCalendarSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCalendarSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
