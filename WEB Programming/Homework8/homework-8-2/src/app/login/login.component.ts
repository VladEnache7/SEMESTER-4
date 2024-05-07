import { Component, OnInit } from '@angular/core';
import { GenericService } from '../generic.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
    username: string | undefined;
    password: string | undefined;

    constructor(
        private genericService: GenericService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        console.log('ngOnInit called for LoginComponent');
    }

    onLogin(username: string | undefined, password: string | undefined): void {
        if (!username || !password) {
            console.log('Username or password is empty.');
            return;
        }
        console.log('Login button clicked.');

        let result = this.genericService
            .checkValidUser(username, password)
            .subscribe((data: any) => {
                console.log('Data received from login service: ' + data);
                if (data) {
                    console.log('Login successful.');
                    this.genericService.setCurrentUser = username;
                    this.router
                        .navigate(['/profile'])
                        .then((r) => console.log('Navigated to profile page'));
                } else {
                    console.log('Login failed.');
                    //     open a pop-up window with the message "Login failed"
                }
            });
    }
}
