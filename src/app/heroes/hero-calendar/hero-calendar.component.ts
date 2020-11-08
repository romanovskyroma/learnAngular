import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from 'src/app/calendar/calendar.component';

@Component({
  selector: 'app-hero-calendar',
  templateUrl: './hero-calendar.component.html',
  styleUrls: ['./hero-calendar.component.scss']
})
export class HeroCalendarComponent extends CalendarComponent implements OnInit {
  // public calendar: string = 'hero calendar';

  constructor() {
    super();
  }

  ngOnInit(): void {
  //  console.log(this.base);
  }

}
