import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string) {
    const rawUserData = localStorage.getItem('userData');
    try {
      const userData = JSON.parse(rawUserData);
      return userData[key] ? userData[key] : null;
    } catch (error) {
      return '';
    }
  }

  getTimeTable(key: string) {
    const rawTimeTableData = localStorage.getItem('getTimeTable');
    try {
      const TimeTableData = JSON.parse(rawTimeTableData);
      return TimeTableData[key] ? TimeTableData[key] : null;
    } catch (error) {
      return '';
    }
  }

  set(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  clear() {
    localStorage.removeItem('userData');
    localStorage.removeItem('getTimetTable');
    localStorage.removeItem('getAttendence');
    localStorage.removeItem('getAttendenceReport');

  }
}
