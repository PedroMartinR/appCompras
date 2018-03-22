import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class FacturasService {


  presURL = 'https://appcompras-db249.firebaseio.com/facturas.json';
  preURL = 'https://appcompras-db249.firebaseio.com/facturas';


  constructor(private http: Http) { }

  postfactura( factura: any) {
    const newpres = JSON.stringify(factura);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.presURL, newpres, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
        });
  }

  getfacturas() {

    return this.http.get( this.presURL )
      .map( res => res.json());
    }

  getfactura( id$: string ) {
    const url = `${ this.preURL }/${ id$ }.json`;
    return this.http.get( url )
      .map( res => res.json());
    }

  putfactura( factura: any, id$: string) {
    const newpre = JSON.stringify(factura);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${ this.preURL }/${ id$ }.json`;

    return this.http.put( url, newpre, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
        });
  }
  delfactura ( id$: string) {
    const url = `${ this.preURL }/${ id$ }.json`;
    return this.http.delete( url)
    .map (res => res.json() );
  }

}
