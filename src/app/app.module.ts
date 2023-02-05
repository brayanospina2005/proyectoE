import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SectionCursosComponent } from './main/section-cursos/section-cursos.component';
import { CursosComponent } from './main/cursos/cursos.component';
import { DescripcionComponent } from './main/cursos/descripcion/descripcion.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    SectionCursosComponent,
    CursosComponent,
    DescripcionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
