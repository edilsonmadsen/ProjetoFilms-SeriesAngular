import { Component, OnInit } from "@angular/core";
import { Movie } from "./../movie.model";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "./../movie.service";
import { SharedService } from "./../../shared/shared.service";

@Component({
  selector: "app-movie-delete",
  templateUrl: "./movie-delete.component.html",
  styleUrls: ["./movie-delete.component.css"],
})
export class MovieDeleteComponent implements OnInit {
  movie: Movie = {
    title: "",
    director: "",
    year: "",
    genres: "",
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get("id");

    this.movieService.getById(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  deleteMovie(): void {
    this.movieService.delete(this.movie.id).subscribe(() => {
      this.sharedService.showMessage("Filme Removido com sucesso!");
      this.router.navigate(["/movies"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/movies"]);
  }
}
