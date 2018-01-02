import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import {Article} from './article';
import {ARTICLES} from './mock-article';
import {MessageService} from './message.service';


@Injectable()
export class ArticleService {

  constructor(private messageService : MessageService) { }
  
  getArticleList (id:number): Observable<Article> {
    this.messageService.add(`ArticleService : fetched articles id=${id}`);
    return of (ARTICLES.find(article => article.id === id))
  }
}


