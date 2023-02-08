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

  getById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${API}/movies/${id}`);
  }

  update(movie: Movie): Observable<Movie> {
    const url = `${API}/movies/${movie.id}`;
    return this.http.put<Movie>(url, movie);
  }

  delete(id: number): Observable<Movie> {
    const url = `${API}/movies/${id}`;
    return this.http.delete<Movie>(url);
  }
}
