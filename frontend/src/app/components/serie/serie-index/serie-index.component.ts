import { Component, OnInit } from "@angular/core";
import { Serie } from "./../serie.model";
import { SerieService } from "./../serie.service";
import { DialogService } from "./../../shared/dialog.service";
import { SharedService } from "./../../shared/shared.service";

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

  constructor(
    private serieService: SerieService,
    private dialogService: DialogService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.serieService.index().subscribe((series) => {
      this.series = series;
    });
  }

  OnDelete(id: any) {
    this.dialogService
      .openConfirmDialog("Tem certeza que deseja remover essa série?")
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.serieService.deleteSerie(id).subscribe(() => {
            this.sharedService.showMessage("Série Removida com sucesso!");
            this.serieService.index().subscribe((series) => {
              this.series = series;
            });
          });
        }
      });
  }
}
