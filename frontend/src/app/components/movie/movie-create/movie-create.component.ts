import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovieService } from "./../movie.service";
import { Movie } from "./../movie.model";
import { SharedService } from "./../../shared/shared.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-movie-create",
  templateUrl: "./movie-create.component.html",
  styleUrls: ["./movie-create.component.css"],
})
export class MovieCreateComponent implements OnInit {
  years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023,
  ];

  movie: Movie = {
    title: "",
    director: "",
    year: "",
    genres: "",
  };

  constructor(
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  createForm: FormGroup;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(6)]],
      director: ["", [Validators.required]],
      genres: ["", [Validators.required]],
      year: ["", [Validators.required]],
    });
  }

  createMovie(): void {
    if (this.createForm.valid) {
      this.movieService.create(this.createForm.value).subscribe(() => {
        this.sharedService.showMessage("Filme Adicionado com sucesso!");
        this.router.navigate(["/movies"]);
      });
    }
  }

  cancel() {
    this.router.navigate(["/movies"]);
  }
}
