import { Injectable } from "@angular/core";
import { Serie } from "./serie.model";
import { Observable, EMPTY } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

import { API } from "../../app.api";
import { SharedService } from "./../shared/shared.service";

@Injectable({
  providedIn: "root",
})
export class SerieService {
  constructor(private http: HttpClient, private sharedService: SharedService) {}

  handleError(error: any): Observable<any> {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
    }

    this.sharedService.showMessage(errorMessage, true);

    return EMPTY;
  }

  create(serie: Serie): Observable<Serie> {
    return this.http.post<Serie>(`${API}/series`, serie).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  index(): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${API}/series`).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  getByIdSerie(id: number): Observable<Serie> {
    return this.http.get<Serie>(`${API}/series/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  update(serie: Serie): Observable<Serie> {
    const url = `${API}/series/${serie.id}`;
    return this.http.put<Serie>(url, serie).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  deleteSerie(id?: number): Observable<Serie> {
    const url = `${API}/series/${id}`;
    return this.http.delete<Serie>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }
}
