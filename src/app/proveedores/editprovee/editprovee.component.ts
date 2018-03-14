import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprovee',
  templateUrl: './editprovee.component.html',
  styleUrls: ['./editprovee.component.css']
})
export class EditproveeComponent implements OnInit {


  proveedorForm: FormGroup;
  proveedor: any;
  name: any;
  cif: any;
  direccion: any;
  cp: any;
  localidad: any;
  provincia: any;
  telefono: any;
  email: any;
  contacto: any;
  id: any;


  constructor(private pf: FormBuilder,
              private proveedoresService: ProveedoresService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                this.activatedRouter.params
                .subscribe( parametros => {
                  this.id = parametros['id'];
                  this.proveedoresService.getProveedor( this.id )
                  .subscribe (proveedor => this.proveedor = proveedor );
                });
               }


  ngOnInit() {
    this.proveedorForm = this.pf.group({
      nombre: ['', Validators.required ],
      cif: ['', Validators.required ],
      direccion: ['', [Validators.required, Validators.minLength(10)] ],
      cp: ['', Validators.required ],
      localidad: ['', Validators.required ],
      provincia: ['', Validators.required ],
      telefono: ['', Validators.required ],
      email: ['', Validators.required ],
      contacto: ['', Validators.required ]
    });

    this.onChanges();
  }

  onChanges(): void {
this.proveedorForm.valueChanges.subscribe(valor => {
  this.proveedor = valor.proveedor;
});
  }

onSubmit() {
  this.proveedor = this.saveProveedor();
  this.proveedoresService.putProveedor(this.proveedor, this.id)
  .subscribe(newpro => {
    this.router.navigate(['/proveedores']);
  });
  this.proveedorForm.reset();
}

saveProveedor() {
  const saveProveedor = {
  nombre: this.proveedorForm.get('nombre').value,
  cif: this.proveedorForm.get('cif').value,
  direccion: this.proveedorForm.get('direccion').value,
  cp: this.proveedorForm.get('cp').value,
  localidad: this.proveedorForm.get('localidad').value,
  provincia: this.proveedorForm.get('provincia').value,
  telefono: this.proveedorForm.get('telefono').value,
  email: this.proveedorForm.get('email').value,
  contacto: this.proveedorForm.get('contacto').value,
};
return saveProveedor;
}
}
