import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MovieService } from "./../movie.service";
import { SharedService } from "./../../shared/shared.service";
import { Movie } from "./../movie.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-movie-update",
  templateUrl: "./movie-update.component.html",
  styleUrls: ["./movie-update.component.css"],
})
export class MovieUpdateComponent implements OnInit {
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
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  updateForm: FormGroup;

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get("id");

    this.updateForm = this.fb.group({
      id: [""],
      title: ["", [Validators.required, Validators.minLength(6)]],
      director: ["", [Validators.required]],
      genres: ["", [Validators.required]],
      year: ["", [Validators.required]],
    });

    this.movieService.getById(id).subscribe((movie) => {
      this.movie = movie;
      this.updateForm.setValue({
        id: movie.id,
        title: movie.title,
        director: movie.director,
        genres: movie.genres,
        year: movie.year,
      });
    });
  }

  updateMovie() {
    this.movieService.update(this.updateForm.value).subscribe(() => {
      this.sharedService.showMessage("Filme Atualizado com sucesso!");
      this.router.navigate(["/movies"]);
    });
  }

  cancel() {
    this.router.navigate(["/movies"]);
  }
}
