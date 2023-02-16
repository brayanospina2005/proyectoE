import { Component } from '@angular/core';
import { CursoService } from 'src/app/curso.service';

@Component({
  selector: 'app-section-cursos',
  templateUrl: './section-cursos.component.html',
  styleUrls: ['./section-cursos.component.css']
})
export class SectionCursosComponent {

  CursosColeccion: cursosInfo[] = [
    {
      title: 'Yoga',
      Image: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/o-que-e-hateoas-400x280.png',
      descripcion: 'inscribete o lloro',
      id: '1',
    },{
      title: 'Yoga',
      Image: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/o-que-e-hateoas-400x280.png',
      descripcion: 'inscribete o lloro',
      id: '2',
    },{
      title: 'Yoga',
      Image: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/o-que-e-hateoas-400x280.png',
      descripcion: 'inscribete o lloro',
      id: '3',
    },{
      title: 'Yoga',
      Image: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/o-que-e-hateoas-400x280.png',
      descripcion: 'inscribete o lloro',
      id: '4',
    },{
      title: 'Yoga',
      Image: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/o-que-e-hateoas-400x280.png',
      descripcion: 'inscribete o lloro',
      id: '5',
    },{
      title: 'Yoga',
      Image: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/o-que-e-hateoas-400x280.png',
      descripcion: 'inscribete o lloro',
      id: '6',
    },{
      title: 'Yoga',
      Image: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/o-que-e-hateoas-400x280.png',
      descripcion: 'inscribete o lloro',
      id: '7',
    },{
      title: 'Yoga',
      Image: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/06/o-que-e-hateoas-400x280.png',
      descripcion: 'inscribete o lloro',
      id: '8',
    },
  ];

  constructor(private cursoService: CursoService) { }

  // onCursoCreado(nuevoCurso: cursosInfo) {
  //   this.CursosColeccion.push(nuevoCurso); // Agrega el nuevo curso a la colección de cursos
  // }
  
  agregarCurso(nuevoCurso: cursosInfo) {
    this.CursosColeccion.push(nuevoCurso);
    console.log(this.CursosColeccion);
  }

}

export interface cursosInfo {
  title: string;
  Image: string;
  descripcion: string;
  id: string;
}
