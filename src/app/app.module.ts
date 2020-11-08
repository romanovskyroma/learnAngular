import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeroCalendarComponent } from './heroes/hero-calendar/hero-calendar.component';
import { HeroCalendarSecondComponent } from './heroes/hero-calendar-second/hero-calendar-second.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CalendarComponent,
    HeroCalendarComponent,
    HeroCalendarSecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, HeroesComponent, HeroCalendarComponent, CalendarComponent]
})
export class AppModule { }
