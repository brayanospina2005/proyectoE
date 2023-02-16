import { Component, ViewChild} from '@angular/core';
import { SectionCursosComponent, cursosInfo } from './section-cursos/section-cursos.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild(SectionCursosComponent)
  private sectionCursosComponent!: SectionCursosComponent;
  
  agregarCurso(nuevoCurso: cursosInfo) {
    this.sectionCursosComponent.agregarCurso(nuevoCurso);
  }
}
