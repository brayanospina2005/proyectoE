import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
        console.log(params);
        this.id = params['id'];
      });
  }

}
