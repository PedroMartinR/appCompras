import { Component, OnInit, Input } from '@angular/core';
import { Archivo } from './../file.modal';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() upload: Archivo;
  
  constructor() { }

  ngOnInit() {
  }

}
