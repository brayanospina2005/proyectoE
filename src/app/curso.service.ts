import { Injectable } from '@angular/core';
import { cursosInfo } from './main/section-cursos/section-cursos.component';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  cursos: cursosInfo[] = [
    {
      title: 'Mindfulness y meditación',
      Image:
        'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      descripcion:
        'n curso para enseñar técnicas de mindfulness y meditación que ayudan a reducir el estrés, la ansiedad y mejorar la concentración.',
      id: '1',
    },
    {
      title: 'Gestion del estres',
      Image:
        'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
      descripcion:
        'un curso para enseñar estrategias y técnicas efectivas para manejar el estrés, incluyendo ejercicios de respiración, técnicas de relajación muscular y cómo identificar y abordar los desencadenantes del estrés.',
      id: '2',
    },
    {
      title: 'Habilidades de comunicación',
      Image:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      descripcion:
        'un curso que enseña habilidades de comunicación efectiva para ayudar a las personas a comunicarse mejor con los demás y mejorar sus relaciones interpersonales.',
      id: '3',
    },
    {
      title: 'Autoestima y confianza',
      Image:
        'https://images.unsplash.com/photo-1587279763527-f245f7ccf7bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80',
      descripcion:
        'un curso para ayudar a las personas a desarrollar una autoestima saludable y confianza en sí mismos, y cómo manejar el rechazo y la crítica constructivamente.',
      id: '4',
    },
    {
      title: 'Salud mental en el lugar de trabajo',
      Image:
        'https://images.unsplash.com/photo-1624561132420-4d3df708e731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      descripcion:
        ' un curso para ayudar a los empleados y empleadores a reconocer y manejar el estrés y la ansiedad en el lugar de trabajo, fomentar un ambiente de trabajo positivo y promover la salud mental en el lugar de trabajo.',
      id: '5',
    },
    {
      title: 'Sueño y descanso',
      Image:
        'https://images.unsplash.com/photo-1520206183501-b80df61043c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      descripcion:
        'un curso que enseña la importancia del sueño y cómo mejorar la calidad y cantidad del sueño. También podría incluir técnicas de relajación para ayudar a conciliar el sueño y dormir mejor.',
      id: '6',
    },
    {
      title: 'Nutrición y salud mental:',
      Image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
      descripcion:
        'un curso para enseñar cómo la nutrición y los hábitos alimenticios afectan la salud mental, y cómo incorporar una dieta saludable y equilibrada para mejorar el estado de ánimo y la salud mental.',
      id: '7',
    },
    {
      title: 'Manejo de la ansiedad y la depresión',
      Image:
        'https://images.unsplash.com/photo-1606103836293-0a063ee20566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      descripcion:
        'un curso para ayudar a las personas a entender y manejar la ansiedad y la depresión, incluyendo terapia cognitivo-conductual y otras técnicas.',
      id: '8',
    },
    {
      title: 'Auto-cuidado y bienestar',
      Image:
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      descripcion:
        ' un curso que enseña técnicas y estrategias para el auto-cuidado y el bienestar general, como el yoga, la actividad física, la relajación y la meditación.',
      id: '9',
    },
  ];

  constructor() {}

  getCursos() {
    return this.cursos;
  }

  setCursos(Cursos: cursosInfo[]) {
    this.cursos = Cursos;
  }

  agregarCurso(Curso: cursosInfo) {
    this.cursos.push(Curso);
  }
}
