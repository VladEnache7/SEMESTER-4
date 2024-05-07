import { Component, OnInit } from '@angular/core';
import { GenericService } from '../generic.service';
import { News } from '../news';

@Component({
    selector: 'app-all-news',
    templateUrl: './all-news.component.html',
    styleUrl: './all-news.component.css',
})
export class AllNewsComponent implements OnInit {
    news: News[] = [];
    paginatedNews: News[] = [];
    categoryFilter: string = '';
    yearFilter: number = 2024;
    currentPage: number = 1;
    newsPerPage: number = 4;
    constructor(private genericService: GenericService) {}

    ngOnInit(): void {
        this.genericService.fetchNews().subscribe((news) => {
            this.news = news;
            this.getPaginatedNews();
        });
    }

    filterByCategory(): void {
        this.genericService
            .fetchNewsByCategory(this.categoryFilter)
            .subscribe((news) => {
                this.news = news;
                this.currentPage = 1;
                this.getPaginatedNews();
            });
    }

    filterByYear(): void {
        this.genericService
            .fetchNewsByYear(this.yearFilter)
            .subscribe((news) => {
                this.news = news;
                this.currentPage = 1;
                this.getPaginatedNews();
            });
    }

    showAllNews(): void {
        this.genericService.fetchNews().subscribe((news) => {
            this.news = news;
            this.currentPage = 1;
            this.getPaginatedNews();
        });
    }

    getPaginatedNews(): void {
        const start = (this.currentPage - 1) * this.newsPerPage;
        const end = start + this.newsPerPage;
        this.paginatedNews = this.news.slice(start, end);
    }

    nextPage(): void {
        if (this.currentPage < Math.ceil(this.news.length / this.newsPerPage)) {
            this.currentPage++;
            this.getPaginatedNews();
        }
    }

    previousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.getPaginatedNews();
        }
    }
}
