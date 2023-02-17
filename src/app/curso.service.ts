import { Injectable } from '@angular/core';
import { cursosInfo } from './main/section-cursos/section-cursos.component'; 

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursos: cursosInfo[] = [
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

  constructor() { };


  getCursos(){
    return this.cursos;
  }

  setCursos(cursos: cursosInfo[]) {
    this.cursos = cursos;
  }

  agregarCurso(curso: cursosInfo) {
    this.cursos.push(curso);
  };
}
