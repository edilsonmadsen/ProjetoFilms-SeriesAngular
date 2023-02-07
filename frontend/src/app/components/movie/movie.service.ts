import { Injectable } from "@angular/core";
import { Movie } from "./movie.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { API } from "../../app.api";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${API}/movies`, movie);
  }

  index(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${API}/movies`);
  }
}
