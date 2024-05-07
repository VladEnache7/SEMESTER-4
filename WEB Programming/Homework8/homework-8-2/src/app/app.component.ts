import { Component } from '@angular/core';
import { Router, Event } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    isNavigating = false;

    constructor(private router: Router) {
        this.router.events.subscribe((event: Event) => {
            // console.log(this.router.url);
            this.isNavigating = this.router.url !== '/';
            // console.log(this.isNavigating);
        });
    }
}
