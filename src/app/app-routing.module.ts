import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistComponent } from './regist/regist.component'
import { ListComponent } from './app.component'
import { ArticleDetailComponent } from './article-detail/article-detail.component';


const routes : Routes = [
  {path : 'regist', component : RegistComponent },
  {path : 'list', component : ListComponent },
  {path : 'detail/:id', component : ArticleDetailComponent },
  {path : '', redirectTo : './list', pathMatch : 'full' },
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule { }

