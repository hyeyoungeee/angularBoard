import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ARTICLES } from '../mock-article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles : Article [];

  // articles = ARTICLES;
  
  constructor(private articleService : ArticleService) { }  
  
  ngOnInit() {
    this.getArticleList();
  }
  

  getArticleList() : void {

   // const id = +this.route.snapshot.paramMap.get('id');

    this.articleService.getArticleList()
  .subscribe(articles => this.articles = articles);  
  }
}
