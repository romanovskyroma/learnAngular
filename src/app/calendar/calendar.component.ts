import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public calendar: string = 'main calendar';

  constructor() { }

  ngOnInit(): void {
    console.log(this.calendar);
  }

}
