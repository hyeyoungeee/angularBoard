import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import {Article} from './article';
import {ARTICLES} from './mock-article';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders ({ 'Content-Type' : 'application/json' })
};

@Injectable()
export class ArticleService {

  private articleUrl = '/getArticleList';

  constructor(
    private http : HttpClient,
    private messageService : MessageService) { }
  
  getArticleList (): Observable<Article[]> {
    this.messageService.add(`ArticleService : fetched the articleList`);

    return this.http.get<Article[]>(this.articleUrl)
    .pipe(
      tap(articles => this.log('fetched articles')),
      catchError(this.handleError('getArticleList', []))
    );
  }

  getArticle (id:number): Observable<Article> {
    const url = `${this.articleUrl}/${id}`;
    this.messageService.add(`ArticleService : fetched articles id=${id}`);
    return this.http.get<Article>(url).pipe(
      tap(_ => this.log(`fetched article id=${id}`))
    )
  }

  updateArticle ( article :Article ): Observable<any>{
    return this.http.put(this.articleUrl, article, httpOptions).pipe(
      tap(_=> this.log(`updated article id =${article.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private log(message : string){
    this.messageService.add('ArticleService:' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}


