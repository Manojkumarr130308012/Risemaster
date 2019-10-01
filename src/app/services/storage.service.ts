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
      return 'CEMain';
    }
  }

  set(response) {
    localStorage.setItem('currentUser', JSON.stringify(response));
  }

  clear() {
    localStorage.removeItem('userData');
  }
}