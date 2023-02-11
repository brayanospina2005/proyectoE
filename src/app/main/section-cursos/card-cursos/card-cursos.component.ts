import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.css']
})
export class CardCursosComponent {

  @Input() title: string = "";
  @Input() image: string = "";
  @Input() descripcion: string = "";
  @Input() id: string = "";
  

}
