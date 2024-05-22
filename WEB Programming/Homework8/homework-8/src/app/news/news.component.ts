import { Component, OnInit } from '@angular/core';
import {News} from "../news";
import {NgForOf} from "@angular/common";
import {GenericService} from "../generic.service";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    NgForOf,
    NgForOf
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent  implements OnInit {

  news: News[] = [];

  constructor(private genericService: GenericService) { }

  onSelect(oneNews: News) {
    console.log(oneNews.NewsTitle + " is selected.");
  }

  ngOnInit() {
    this.fetchNews();
    console.log("NewsComponent initialized");
  }

  fetchNews() {
    this.genericService.fetchNews().subscribe(news => this.news = news);
  }
}
