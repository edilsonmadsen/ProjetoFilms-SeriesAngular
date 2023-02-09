import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SerieService } from "./../serie.service";
import { SharedService } from "./../../shared/shared.service";
import { Serie } from "./../serie.model";

@Component({
  selector: "app-serie-delete",
  templateUrl: "./serie-delete.component.html",
  styleUrls: ["./serie-delete.component.css"],
})
export class SerieDeleteComponent implements OnInit {
  serie: Serie = {
    title: "",
    director: "",
    year: "",
    genres: "",
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serieService: SerieService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get("id");

    this.serieService.getByIdSerie(id).subscribe((serie) => {
      this.serie = serie;
    });
  }

  deleteSerie(): void {
    this.serieService.deleteSerie(this.serie.id).subscribe(() => {
      this.sharedService.showMessage("Série Removida com sucesso!");
      this.router.navigate(["/series"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/series"]);
  }
}
