import { Injectable } from '@angular/core';
import { cursosInfo } from './main/section-cursos/section-cursos.component'; 

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursosColeccion: cursosInfo[] = [];

  constructor() { };

  agregarCurso(curso: cursosInfo) {
    this.cursosColeccion.push(curso);
  };
}
