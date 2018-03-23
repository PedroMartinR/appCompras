import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class FacturasService {


  frajURL = 'https://appcompras-db249.firebaseio.com/facturas.json';
  fraURL = 'https://appcompras-db249.firebaseio.com/facturas';


  constructor(private http: Http) { }

  postfactura( factura: any) {
    const newfraj = JSON.stringify(factura);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.frajURL, newfraj, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
        });
  }

  getfacturas() {

    return this.http.get( this.frajURL )
      .map( res => res.json());
    }

  getfactura( id$: string ) {
    const url = `${ this.fraURL }/${ id$ }.json`;
    return this.http.get( url )
      .map( res => res.json());
    }

  putfactura( factura: any, id$: string) {
    const newfra = JSON.stringify(factura);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${ this.fraURL }/${ id$ }.json`;

    return this.http.put( url, newfra, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
        });
  }
  delfactura ( id$: string) {
    const url = `${ this.fraURL }/${ id$ }.json`;
    return this.http.delete( url)
    .map (res => res.json() );
  }

}
