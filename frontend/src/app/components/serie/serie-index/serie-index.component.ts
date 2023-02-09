import { Component, OnInit } from "@angular/core";
import { Serie } from "./../serie.model";
import { SerieService } from "./../serie.service";

@Component({
  selector: "app-serie-index",
  templateUrl: "./serie-index.component.html",
  styleUrls: ["./serie-index.component.css"],
})
export class SerieIndexComponent implements OnInit {
  series!: Serie[];
  displayedColumns: string[] = [
    "id",
    "title",
    "director",
    "genres",
    "year",
    "actions",
  ];

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.index().subscribe((series) => {
      this.series = series;
    });
  }
}
{
}
