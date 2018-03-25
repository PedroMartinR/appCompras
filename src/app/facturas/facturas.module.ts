import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddfraComponent } from './facturas/addfra/addfra.component';
import { EdifraComponent } from './facturas/edifra/edifra.component';
import { FacturasComponent } from './facturas/facturas/facturas.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GuardService } from '../servicios/guard.service';




const routes: Routes = [
  { path: 'addfra', component: AddfraComponent,
  canActivate: [GuardService] },
  { path: 'facturas', component: FacturasComponent,
  canActivate: [GuardService] },
  { path: 'edifra/:id', component: EdifraComponent,
  canActivate: [GuardService] }

];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  declarations: [ ],
  providers: []
})
export class FacturasModule { }
