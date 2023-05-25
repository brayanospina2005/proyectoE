import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  postId: any;
  valor: number=20000000;
  
  constructor(private http: HttpClient){
  }

  pasarela(){
    window.location.href = "https://checkout.wompi.co/l/"+this.postId;
  }

  ngOnInit() {
    const headers = { 'Authorization': 'Bearer prv_test_AqoVI0P6Vdff5U6dB4KpfL0hHJvj44nM' };
    const body = { 
      "name": "Compra de curso", 
      "description": "Curso de bienestar", 
      "single_use": false, 
      "collect_shipping": false, 
      "currency": "COP",  
      "amount_in_cents": this.valor, 
      "redirect_url": "http://localhost:4200/pagos" 
    };
    this.http.post<any>('https://sandbox.wompi.co/v1/payment_links', body, { headers }).subscribe(data => {
        this.postId = data.data.id;
    })
  }

}
