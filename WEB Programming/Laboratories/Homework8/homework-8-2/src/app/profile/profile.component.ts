import { Component, OnInit } from '@angular/core';
import { GenericService } from '../generic.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
    username: string | undefined;
    constructor(
        private genericService: GenericService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        console.log('ngOnInit called for ProfileComponent');
        this.username = this.genericService.getCurrentUser;
    }
    viewAllNews(): void {
        this.router.navigate(['/all-news']);
    }

    addNews(): void {
        this.router.navigate(['/add-news']);
    }

    logout(): void {
        this.genericService.setCurrentUser = '';
        this.router.navigate(['/login']);
    }
}
