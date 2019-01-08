import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie;

  constructor(
    private storage: StorageService,
  ) { }

  ngOnInit() {
    this.storage.getList(this.movie.id)
    .subscribe(
      (response) => {
        this.movie = response;
       }
    );
  }
}
