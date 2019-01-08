import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  filter = '';
  constructor(private movies: MoviesService) { }
  
  ngOnInit() {

  }

  search(filter) {
    this.movies.emitChange(filter);
  }
}
