import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ArticleService} from '../article.service'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})

export class ArticleDetailComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private articleService : ArticleService,
    private location : Location
  ) { }

  ngOnInit() {
  }

}
