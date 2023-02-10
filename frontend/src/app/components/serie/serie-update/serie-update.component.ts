import { Component, OnInit } from "@angular/core";
import { Serie } from "./../serie.model";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

    this.serieService.getByIdSerie(id).subscribe((serie) => {
      this.serie = serie;
      this.updateForm.setValue({
        id: serie.id,
        title: serie.title,
        director: serie.director,
        genres: serie.genres,
        year: serie.year,
      });
    });
  }

  updateSerie() {
    this.serieService.update(this.updateForm.value).subscribe(() => {
      this.sharedService.showMessage("Série Atualizada com sucesso!");
      this.router.navigate(["/series"]);
    });
  }

  cancel() {
    this.router.navigate(["/series"]);
  }
}
