import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  proveedores: any = [
   {
     nombre: 'Telefonica',
     cif: 'B12345678',
     cp: '28.010',
     localidad: 'Madrid',
     provincia: 'Madrid',
     telefono: 9111111111,
     email: 'info2telefonica.com',
     contacto: 'Juan Perez'
   }, 
   {
    nombre: 'Iberdrola',
    cif: 'B87654321',
    cp: '28.015',
    localidad: 'Madrid',
    provincia: 'Madrid',
    telefono: 9222222222,
    email: 'info@iberdrola.com',
    contacto: 'Laura Martinez'
  }
  ]

  constructor() { }

  getProveedores(){
    return this.proveedores;
  }

}
