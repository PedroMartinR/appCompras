import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})

export class ProveedoresComponent implements OnInit {

  proveedores: any[] = [];

  constructor(private proveedoresService: ProveedoresService)  {
    this.proveedoresService.getProveedores()
    .subscribe(proveedores => {
      // tslint:disable-next-line:forin
      for (const id$ in proveedores) {
        const p = proveedores[id$];
        p.id$ = id$;
        this.proveedores.push(proveedores[id$]);
  }
});
  }
  ngOnInit() {
  }
  eliminarPoveedor( id$ ) {
    this.proveedoresService.delProveedor(id$)
    .subscribe ( res => {
      this.proveedores = [];
      this.proveedoresService.getProveedores()
      .subscribe(proveedores => {
        // tslint:disable-next-line:forin
        for ( const id$ in proveedores) {
          const p = proveedores[id$];
          p.id$ = id$;
         this.proveedores.push(proveedores[id$]);
        }
      });
    });
  }
}
