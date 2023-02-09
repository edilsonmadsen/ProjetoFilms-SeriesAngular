import { Component, OnInit } from "@angular/core";
import { Serie } from "./../serie.model";
import { Router } from "@angular/router";
import { SharedService } from "./../../shared/shared.service";
import { SerieService } from "./../serie.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-serie-create",
  templateUrl: "./serie-create.component.html",
  styleUrls: ["./serie-create.component.css"],
})
export class SerieCreateComponent implements OnInit {
  years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023,
  ];

  serie: Serie = {
    title: "",
    director: "",
    genres: "",
    year: "",
  };
  constructor(
    private router: Router,
    private serieService: SerieService,
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  createForm: FormGroup;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ["", [Validators.required]],
      director: ["", [Validators.required]],
      genres: ["", [Validators.required]],
      year: ["", [Validators.required]],
    });
  }

  createSerie(): void {
    if (this.createForm.valid) {
      this.serieService.create(this.serie).subscribe(() => {
        this.sharedService.showMessage("Série Adicionada com sucesso!");
        this.router.navigate(["/series"]);
      });
    }
  }

  cancel() {
    this.router.navigate(["/series"]);
  }
}
