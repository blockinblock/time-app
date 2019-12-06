import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable, Subject, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TimeUtilsService {
  // Observable array of times
  setTimeWindow$: Observable<any>;
  private setTimeWindowSubject = new Subject<any>();

  // Observeable current time (rounded)
  setTime$: Observable<any>;
  private setTimeSubject = new Subject<any>();

  // Observeable 5 min timer (rounded)
  setFiveTime$: Observable<any>;
  private setFiveTimeSubject = new Subject<any>();

  private currentDate = new Date();
  private currentDateStr = '';
  private timeWindow = [];

  constructor(private datePipe: DatePipe) {
    this.setTimeWindow$ = this.setTimeWindowSubject.asObservable();
    this.setTime$ = this.setTimeSubject.asObservable();
    this.setFiveTime$ = this.setFiveTimeSubject.asObservable();
  }

  // One second timer
  private time$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  // Five minute timer (rounded to nearest 5 mins)
  private rounded = this.roundDateTime(this.currentDate, 5);
  private fiveMinTimer$: Observable<string> = timer(this.rounded, 300000).pipe(
    map(tick => this.formatDateTime(this.roundDateTime(new Date(), 5))),
    shareReplay(1)
  );

  /**
   * Emits the current time every 1 sec
   */
  get time() {
    return this.time$;
  }

  /**
   * Emits the time every 5 mins
   */
  get fiveMin() {
    return this.fiveMinTimer$;
  }

  /**
   * Sets the current time (rounded to 5 minutes)
   */
  public setTime() {
    this.setTimeSubject.next(this.setCurDateTimeStr());
  }

  /**
   * Set the time window array with timestamps in ISO 8601 format
   */
  public setTimeWindow() {
    const numIntervals = 12;
    let nextDateTime: Date;
    let nextDateTimeStr = '';

    this.timeWindow = [];

    // Get current date/time
    this.currentDateStr = this.setCurDateTimeStr();

    // Calculate timestamps in 5 min increments -1h to +1h
    for (let i = 0; i < numIntervals; i++) {
      // Take current time and add 5 mins
      nextDateTime = this.roundDateTime(this.addMinutes(this.currentDate, i * 5), 5);
      nextDateTimeStr = this.formatDateTime(nextDateTime);
      this.timeWindow.push({
        key: nextDateTimeStr.substr(11, 5),
        value: nextDateTimeStr});
    }

    this.setTimeWindowSubject.next(this.timeWindow);
  }

  /**
   * Returns the current date/time rounded to nearest 5 minutes as string
   */
  public setCurDateTimeStr() {
    const rounded = this.roundDateTime(this.currentDate, 5);
    return (this.formatDateTime(rounded));
  }

  /**
   * Returns the date formatted as a string suitable for WMS time queries
   * @param date the date to be formatted
   */
  public formatDateTime(date: Date) {
    const formatted = this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm').concat(':00.000Z');
    return (formatted);
  }

  /**
   * Adds the given number of minutes to the date
   * @param date the date to add minutes to
   * @param minutes the number of minutes to add
   */
  public addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes * 60000);
  }

  /**
   * Rounds the date to agiven number of minutes
   * @param date the date/time to round
   * @param minutes the number of minutes to round to
   */
  public roundDateTime(date: Date, minutes: number) {
    const ms = 1000 * 60 * minutes;   // convert minutes to ms
    const roundedDate = new Date(Math.round(date.getTime() / ms) * ms);
    return roundedDate;
  }
}
