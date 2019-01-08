import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { StorageService } from './services/storage.service';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { SearchPipe } from './services/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: ':category', component: MoviesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieComponent,
    MovieDetailsComponent,
    SearchPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MoviesService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
