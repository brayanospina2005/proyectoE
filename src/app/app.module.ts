import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { CursosComponent } from './main/cursos/cursos.component';
import { DescripcionComponent } from './main/cursos/descripcion/descripcion.component';
import { CardCursosComponent } from './main/section-cursos/card-cursos/card-cursos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursosComponent,
    DescripcionComponent,
    PageNotFoundComponent,
    LayoutComponent,
    CardCursosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
