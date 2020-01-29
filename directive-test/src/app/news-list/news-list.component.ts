import { Component, OnInit } from '@angular/core';
import { News, NewsService } from './news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  searchText:string
  selectedNewsId:number
  newsItems : News[] = []
    expandNews(id:number) {
      this.selectedNewsId = id

      return false
    }
  constructor(private newsSvc:NewsService) { }

  ngOnInit() {

    this.newsSvc.getNewsItems().subscribe(response => {
      this.newsItems = response;
    },
    error => {
      alert('SORRY... THERE WAS A PROBLEM WITH SOMETHING LEL')
    })
  }

}

