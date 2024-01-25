import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

interface Article {
  id: number;
  photo: string;
  title: string;
  description: string;
  link?: string;  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  public mainArticle: Article = dataFake[0];
  public articles: Article[] = [];
  
  constructor() {
    console.log(this.mainArticle)
  }

  ngOnInit(): void {
    this.articles = dataFake.filter((_, i) => i > 0 );
  }
}


