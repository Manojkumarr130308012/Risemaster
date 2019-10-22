import { Component } from '@angular/core';
import {
  Event,
  Router,
  NavigationStart,
  NavigationEnd,
  RouterEvent
} from "@angular/router";
import { PlatformLocation } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUrl: string;
  showLoadingIndicatior = true;
  showHead: boolean = true;
  showSide: boolean = true;

  constructor(public _router: Router, location: PlatformLocation) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicatior = true;
        location.onPopState(() => {
          window.location.reload();
        });
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf("/") + 1
        );
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicatior = false;
      }
<<<<<<< HEAD
      _router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/login') {
            this.showHead = false;
            this.showSide = false;
          } else {
            // console.log("NU")
            this.showHead = true;
            this.showSide = true;
          }
        }
      });
=======
     /*  _router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
           if (event['url'] == '/login') {
             this.showHead = false;
             this.showSide = false;
           } else {
              console.log("NU")
             this.showHead = true;
             this.showSide = true;
           }
         }
       });*/
>>>>>>> 89c8633d8afc02111da64d0c99a0ce467075b769

      window.scrollTo(0, 0);
    });
  }
}
