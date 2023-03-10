import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";

import { MatFormFieldModule } from "@angular/material/form-field";

import { FooterComponent } from "./components/template/footer/footer.component";
import { NavegationComponent } from "./components/template/navegation/navegation.component";
import { HomeComponent } from "./views/home/home.component";
import { MoviesComponent } from "./views/movies/movies.component";
import { SeriesComponent } from "./views/series/series.component";
import { MovieCreateComponent } from "./components/movie/movie-create/movie-create.component";
import { SerieCreateComponent } from "./components/serie/serie-create/serie-create.component";
import { MovieIndexComponent } from "./components/movie/movie-index/movie-index.component";
import { MovieUpdateComponent } from "./components/movie/movie-update/movie-update.component";
import { MovieDeleteComponent } from "./components/movie/movie-delete/movie-delete.component";
import { SerieIndexComponent } from "./components/serie/serie-index/serie-index.component";
import { SerieUpdateComponent } from "./components/serie/serie-update/serie-update.component";
import { SerieDeleteComponent } from "./components/serie/serie-delete/serie-delete.component";
import { DialogComponent } from "./components/shared/dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavegationComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    MovieCreateComponent,
    SerieCreateComponent,
    MovieIndexComponent,
    MovieUpdateComponent,
    MovieDeleteComponent,
    SerieIndexComponent,
    SerieUpdateComponent,
    SerieDeleteComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
