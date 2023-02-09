import { Component, OnInit } from "@angular/core";
import { Serie } from "./../serie.model";
import { Router, ActivatedRoute } from "@angular/router";

import { SharedService } from "./../../shared/shared.service";
import { SerieService } from "./../serie.service";

@Component({
  selector: "app-serie-update",
  templateUrl: "./serie-update.component.html",
  styleUrls: ["./serie-update.component.css"],
})
export class SerieUpdateComponent implements OnInit {
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

  updateSerie() {
    this.serieService.update(this.serie).subscribe(() => {
      this.sharedService.showMessage("Série Atualizada com sucesso!");
      this.router.navigate(["/series"]);
    });
  }

  cancel() {
    this.router.navigate(["/series"]);
  }
}
