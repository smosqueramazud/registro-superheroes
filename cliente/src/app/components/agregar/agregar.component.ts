import { Component, OnInit } from '@angular/core';
import { ConexionApiService, Superheroe } from 'src/app/services/conexion-api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  superheroe: Superheroe = {
    id_superheroe:"",
    nombre: "",
    grupo: "",
    ciudad_operacion: "",
    condicion: "",
    superpoder: "",
    vehiculo: null,
    tipo_vehiculo: "",
    logo: ""
  }

  superHeroe;

  constructor(private conexionApi: ConexionApiService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.superHeroe = false;
  }

  agregarSuperheroe(){
    this.spinner.show();
    delete this.superheroe.id_superheroe;
    this.conexionApi.agregarSuperheroe(this.superheroe).subscribe(
      res => {
        this.spinner.hide();
        this.superHeroe = true;
        alert(`Se ha agregado el superhéroe exitosamente!!`)
      },
      err => {
        this.spinner.hide();
        console.log(err)
        alert(`Ha ocurrido un error agregando el superhéroe, por favor intenta de nuevo mas tarde`)
      }
    );
    this.superHeroe = true;
    /* this.router.navigate(['/inicio']); */

  }

}
