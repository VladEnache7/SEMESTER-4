import { Component, OnInit } from '@angular/core';
import { GenericService } from '../generic.service';

@Component({
    selector: 'app-update-news',
    templateUrl: './update-news.component.html',
    styleUrl: './update-news.component.css',
})
export class UpdateNewsComponent implements OnInit {
    constructor(private genericService: GenericService) {}

    ngOnInit(): void {}

    updateNews() {
        /* body of the method */
    }
}
