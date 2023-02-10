import { Component, OnInit } from "@angular/core";
import { MovieService } from "./../movie.service";
import { Movie } from "./../movie.model";
import { DialogService } from "./../../shared/dialog.service";
import { SharedService } from "./../../shared/shared.service";

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

  constructor(
    private movieService: MovieService,
    private dialogService: DialogService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.movieService.index().subscribe((movies) => {
      this.movies = movies;
    });
  }

  OnDelete(id) {
    this.dialogService
      .openConfirmDialog("Tem certeza que deseja remover esse filme?")
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.movieService.delete(id).subscribe(() => {
            this.sharedService.showMessage("Filme Removido com sucesso!");
            this.movieService.index().subscribe((movies) => {
              this.movies = movies;
            });
          });
        }
      });
  }
}
