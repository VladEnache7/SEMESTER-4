import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { News } from './news';

@Injectable({
    providedIn: 'root',
})
export class GenericService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };
    private currentUser = '';
    private backendUrl =
        'http://localhost/WebProgrammingCourse/DataBaseConnection.php'; // URL to web api
    private selectedNewsId: number = -1;

    constructor(private http: HttpClient) {}

    set setSelectedNewsId(id: number) {
        this.selectedNewsId = id;
    }

    get getSelectedNewsId(): number {
        return this.selectedNewsId;
    }

    set setCurrentUser(username: string) {
        this.currentUser = username;
    }

    get getCurrentUser(): string {
        return this.currentUser;
    }

    fetchNews(): Observable<News[]> {
        return this.http
            .get<News[]>(this.backendUrl + '?action=selectAllNews')
            .pipe(catchError(this.handleError<News[]>('fetchNews', [])));
    }

    fetchNewsByUser(username: string): Observable<News[]> {
        return this.http
            .get<
                News[]
            >(this.backendUrl + '?action=selectNewsByUser&username=' + username)
            .pipe(catchError(this.handleError<News[]>('fetchNewsByUser', [])));
    }

    fetchNewsByCategory(category: string): Observable<News[]> {
        return this.http
            .get<
                News[]
            >(this.backendUrl + '?action=selectNewsByCategory&category=' + category)
            .pipe(
                catchError(this.handleError<News[]>('fetchNewsByCategory', [])),
            );
    }

    fetchNewsByYear(year: number): Observable<News[]> {
        return this.http
            .get<
                News[]
            >(this.backendUrl + '?action=selectNewsByYear&year=' + year)
            .pipe(catchError(this.handleError<News[]>('fetchNewsByYear', [])));
    }

    addNews(
        title: string,
        content: string,
        category: string,
        username: string,
    ): Observable<string> {
        return this.http
            .get<string>(
                this.backendUrl +
                    '?action=addNews&title=' +
                    title +
                    '&content=' +
                    content +
                    '&category=' +
                    category +
                    '&username=' +
                    username,
            )
            .pipe(catchError(this.handleError<string>('addNews', '')));
    }

    updateNews(news: News): Observable<string> {
        return this.http
            .get<string>(
                this.backendUrl +
                    '?action=updateNews&id=' +
                    news.NewsId +
                    '&title=' +
                    news.NewsTitle +
                    '&content=' +
                    news.NewsContent +
                    '&category=' +
                    news.NewsCategory +
                    '&username=' +
                    news.NewsProducer,
            )
            .pipe(catchError(this.handleError<string>('updateNews', '')));
    }

    fetchNewsById(id: number): Observable<News> {
        return this.http
            .get<News>(this.backendUrl + '?action=selectNewsById&id=' + id)
            .pipe(catchError(this.handleError<News>('fetchNewsById')));
    }

    checkValidUser(username: string, password: string): Observable<boolean> {
        return this.http
            .get<boolean>(
                this.backendUrl +
                    '?action=checkValidUser&username=' +
                    username +
                    '&password=' +
                    password,
            )
            .pipe(
                catchError(this.handleError<boolean>('checkValidUser', false)),
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
