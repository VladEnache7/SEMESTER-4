import { Component, OnInit } from '@angular/core';
import { GenericService } from '../generic.service';
import { News } from '../news';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-news',
    templateUrl: './add-news.component.html',
    styleUrl: './add-news.component.css',
})
export class AddNewsComponent implements OnInit {
    news: News[] = [];
    username: string = '';
    title: string = '';
    category: string = '';
    content: string = '';

    // Pagination properties
    currentPage = 1;
    newsPerPage = 4;

    constructor(
        private genericService: GenericService,
        private router: Router,
    ) {}

    // Pagination methods
    get paginatedNews(): News[] {
        const startIndex = (this.currentPage - 1) * this.newsPerPage;
        return this.news.slice(startIndex, startIndex + this.newsPerPage);
    }

    ngOnInit(): void {
        console.log('ngOnInit called for AddNewsComponent');
        this.username = this.genericService.getCurrentUser;
        this.fetchNewsByUser();
    }

    fetchNewsByUser() {
        this.genericService.fetchNewsByUser(this.username).subscribe((news) => {
            this.news = news;
        });
    }

    addNews(): void {
        console.log(this.title, this.content, this.category, this.username);
        this.genericService
            .addNews(this.title, this.content, this.category, this.username)
            .subscribe((r) => this.fetchNewsByUser());
    }

    returnToProfile(event: Event): void {
        event.preventDefault();
        this.router.navigate(['/profile']).then((r) => r);
    }

    nextPage(): void {
        if (this.currentPage < this.news.length / this.newsPerPage) {
            this.currentPage++;
        }
    }

    previousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    editNews(newsId: number): void {
        this.genericService.setSelectedNewsId = newsId;
        console.log('Selected news id: ', newsId);
        this.router.navigate(['/update-news']).then((r) => r);
    }
}
