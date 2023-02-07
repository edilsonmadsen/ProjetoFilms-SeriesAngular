import { Component, OnInit } from "@angular/core";
import { MovieService } from "./../movie.service";
import { Movie } from "./../movie.model";

@Component({
  selector: "app-movie-index",
  templateUrl: "./movie-index.component.html",
  styleUrls: ["./movie-index.component.css"],
})
export class MovieIndexComponent implements OnInit {
  movies!: Movie[];
  displayedColumns: string[] = [
    "id",
    "title",
    "director",
    "genres",
    "year",
    "actions",
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.index().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
