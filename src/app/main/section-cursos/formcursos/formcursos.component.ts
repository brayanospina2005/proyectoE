  import { Component, EventEmitter, Output } from '@angular/core';
  import { cursosInfo } from '../section-cursos.component';
  import { CursoService } from 'src/app/curso.service';

  @Component({
    selector: 'app-formcursos',
    templateUrl: './formcursos.component.html',
    styleUrls: ['./formcursos.component.css']
  })
  export class FormcursosComponent {
    @Output() cursoCreado = new EventEmitter<cursosInfo>();

    nuevoCurso: cursosInfo = {
      title: '',
      Image: '',
      descripcion: '',
      id: '',
    };

    constructor(private cursoService: CursoService) { }

    onSubmit() {
      this.cursoCreado.emit(this.nuevoCurso);
      this.cursoService.agregarCurso(this.nuevoCurso);
      this.nuevoCurso = {
        title: '',
        Image:'',
        descripcion: '',
        id: ''
      };
    }
  }
