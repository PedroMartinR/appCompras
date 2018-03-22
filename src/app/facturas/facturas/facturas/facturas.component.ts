import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../../servicios/facturas.service';



@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: any[] = [];

  constructor(private facturasService: FacturasService) {
    this.facturasService.getfacturas()
    .subscribe(facturas => {
      // tslint:disable-next-line:forin
      for (const id$ in facturas) {
        const p = facturas[id$];
        p.id$ = id$;
        this.facturas.push(facturas[id$]);
      }
    });
   }

  ngOnInit() {
  }
  eliminarfactura(id$) {
    this.facturasService.delfactura(id$)
    .subscribe ( res => {
      this.facturas = [];
      this.facturasService.getfacturas()
      .subscribe(facturas => {
        // tslint:disable-next-line:forin
        for (const id$ in facturas) {
          const p = facturas[id$];
          p.id$ = id$;
         this.facturas.push(facturas[id$]);
        }
      });
    });
  }
}
