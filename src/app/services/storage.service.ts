import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../environments/environment'

@Injectable()
export class StorageService { 

  constructor(private http: HttpClient) { }

  getList(category) {
    return this.http.get(env.apiUrl + '3/movie/' + category + env.apiKey);
  }

  getImageBaseUrl() {
   return env.imageBaseurl;
  }
  getPosterBaseUrl() {
    return env.posterUrl;
   }
   
  search(query) {
    query = this.convertToSlug(query);
    return this.http.get(env.apiUrl + '3/search/movie' + env.apiKey + '&query=' + query );
  }

  convertToSlug(string) {
    string = string.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '+')
      .replace(/-+/g, '+');
    return string;
  }
}
