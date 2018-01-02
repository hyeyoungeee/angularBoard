import { Component, OnInit, Input } from '@angular/core';
import { Article} from '../article';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  @Input() article : Article;

  constructor() { }

  ngOnInit() {
  }

}
