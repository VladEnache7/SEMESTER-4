import { Component, OnInit } from '@angular/core';
import { GenericService } from '../generic.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
    username: string = '';
    password: string = '';

    constructor(private genericService: GenericService) {}

    ngOnInit(): void {
        console.log('ngOnInit called for LoginComponent');
    }

    onLogin(username: string, password: string): void {
        console.log('Login button clicked.');
        console.log('Username: ' + username);
        console.log('Password: ' + password);
        this.genericService
            .checkValidUser(username, password)
            .subscribe((data: any) => {
                console.log('Data received from login service: ' + data);
            });
    }
}
