import { StorageService } from '../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList = [];
  listName = 'popular';


  constructor(
    private storage: StorageService,
    private movies: MoviesService,
    private route: ActivatedRoute,
  ) {
    movies.searchFilterEmited.subscribe(
      filter => {
          this.search(filter);
          this.listName = 'Search results of: ' + filter;
      });
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        if (params.category === undefined) {
          this.getList('popular');
        } else {
        this.getList(params.category);
        }
      }
    );
  }

  getList(category) {
    this.storage.getList(category)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
        this.listName = category[0].toUpperCase() + category.slice(1)
        .replace(/_/g, ' ');
      }
    );
  }

  search(query) {
    this.storage.search(query)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
      }
    );
  }
}
