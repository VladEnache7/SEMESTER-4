import { Component, OnInit } from '@angular/core';
import { GenericService } from '../generic.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-update-news',
    templateUrl: './update-news.component.html',
    styleUrl: './update-news.component.css',
})
export class UpdateNewsComponent implements OnInit {
    selectedNewsId: number = 0;
    newsTitle: string = '';
    newsContent: string = '';
    newsCategory: string = '';

    constructor(
        private genericService: GenericService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.selectedNewsId = this.genericService.getSelectedNewsId;
        console.log(
            'ngOnInit called for UpdateNewsComponent selectedNewsId:',
            this.selectedNewsId,
        );
        this.genericService
            .fetchNewsById(this.selectedNewsId)
            .subscribe((news) => {
                console.log(news);
                this.newsTitle = news.NewsTitle;
                this.newsContent = news.NewsContent;
                this.newsCategory = news.NewsCategory;
                console.log(
                    this.newsTitle,
                    this.newsContent,
                    this.newsCategory,
                );
            });
    }

    updateNews() {
        this.genericService
            .updateNews({
                NewsId: this.selectedNewsId,
                NewsTitle: this.newsTitle,
                NewsContent: this.newsContent,
                NewsCategory: this.newsCategory,
                NewsDatePosted: '2024-01-01',
                NewsProducer: this.genericService.getCurrentUser,
            })
            .subscribe((result) => {
                console.log('News updated successfully');
                this.router.navigate(['/add-news']).then((r) => r);
            });
    }

    viewAllNews() {
        this.router.navigate(['/all-news']).then((r) => r);
    }

    returnToProfile() {
        this.router.navigate(['/profile']).then((r) => r);
    }
}
