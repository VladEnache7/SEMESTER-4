import { Component, OnInit } from '@angular/core';
import { GenericService } from '../generic.service';
import { News } from '../news';

@Component({
    selector: 'app-add-news',
    templateUrl: './add-news.component.html',
    styleUrl: './add-news.component.css',
})
export class AddNewsComponent implements OnInit {
    news: News[] = [];

    constructor(private genericService: GenericService) {}

    ngOnInit(): void {
        console.log('ngOnInit called for AddNewsComponent');
    }

    addNews(): void {
        /*this.students = this.genericService.fetchStudents();*/
        // this.genericService.addNews(
        //   .subscribe((news) => this.news = news);
    }

    onSelect(news: News): void {
        // console.log(news.title + ' is selected.');
    }
}
