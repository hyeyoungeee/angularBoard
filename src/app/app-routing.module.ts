import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistComponent } from './regist/regist.component'
import { MainComponent } from './app.component'
import { ArticleComponent } from './article/article.component'
import { ArticleDetailComponent } from './article-detail/article-detail.component';


const routes : Routes = [
  {path : 'regist', component : RegistComponent },
  {path : 'list', component : ArticleComponent },
  {path : 'detail/:id', component : ArticleDetailComponent },
  {path : '', redirectTo : '/list', pathMatch : 'full' }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule { }

