import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { RegistComponent } from './regist/regist.component';
import { AppRoutingModule } from './app-routing.module';

import { ArticleService } from './article.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


@NgModule({
  declarations: [
    ListComponent,
    ArticleComponent,
    RegistComponent,
    MessagesComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticleService, MessageService ],
  bootstrap: [ListComponent,MessagesComponent]
})
export class AppModule { }
