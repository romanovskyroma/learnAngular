import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from 'src/app/calendar/calendar.component';

@Component({
  selector: 'app-hero-calendar-second',
  templateUrl: './../hero-calendar/hero-calendar.component.html',
  styleUrls: ['./hero-calendar-second.component.scss']
})
export class HeroCalendarSecondComponent extends CalendarComponent implements OnInit {
  public calendar: string = 'hero Second Calendar';

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
