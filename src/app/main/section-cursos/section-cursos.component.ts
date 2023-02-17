import { Component } from '@angular/core';
import { CursoService } from 'src/app/curso.service';

@Component({
  selector: 'app-section-cursos',
  templateUrl: './section-cursos.component.html',
  styleUrls: ['./section-cursos.component.css']
})
export class SectionCursosComponent {
  cursos: cursosInfo[] =[];


  constructor(private cursoService: CursoService) {
    this.cursos = this.cursoService.getCursos();
   }
  
  agregarCurso(nuevoCurso: cursosInfo) {
    this.cursoService.agregarCurso(nuevoCurso);
  }

}

export interface cursosInfo {
  title: string;
  Image: string;
  descripcion: string;
  id: string;
}
