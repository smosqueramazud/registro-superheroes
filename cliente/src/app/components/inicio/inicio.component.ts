import { Component, OnInit } from '@angular/core';
import { ConexionApiService, Superheroe } from 'src/app/services/conexion-api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  //ce crea la lista de superheroes con la interface Superheore
  listaSuperheroes: Superheroe[];

  displayedColumns: string[] = ['nombre', 'grupo', 'ciudad', 'condicion', 'poder', 'vehiculo', 'tipo_vehiculo', 'logo', 'modificar', 'eliminar'];

  nombreBuscar;
  ciudadBuscar;

  constructor(private conexionApi: ConexionApiService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerListaSuperheroes();
  }


  obtenerListaSuperheroes(){
    this.spinner.show();
    this.conexionApi.getSuperheroes().subscribe(
      res => {
        this.spinner.hide();
        this.listaSuperheroes = <any>res; //se debe dejar tipo any ya que listaSuperheroes es tipo Superheroe
      },
      err => {
        this.spinner.hide();
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de superhéroes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

  eliminarSuperheroe(id:string, nombre:string){
    this.conexionApi.eliminarSuperheroe(id).subscribe(
      res => {
        alert(`El superhéroe ${nombre} se elimino correctamente`);
        this.obtenerListaSuperheroes();
      },
      err => {
        console.log(err)
        alert(`Ha ocurrido un error eliminando el superhéroe, por favor intenta de nuevo mas tarde`)
      }
    )
  }

  modificarSuperheroe(id:string){
    this.router.navigate(['/modificar/' + id]); //se manda el id por url
  }

  cambiarVista(){
    let array =[];
    array = this.listaSuperheroes;
    this.router.navigateByUrl('/vista-cards', {state: {array}}); //se manda el id por url
  }

  buscarPorNombre(name){
    this.spinner.show();
    if(name){
      this.conexionApi.getSuperheroePorNombre(name).subscribe(
        res => {
          this.listaSuperheroes = <any>res;
          if(this.listaSuperheroes.length === 0){
            alert('No se encontro ningun super heroe con el nombre ingresado, prueba de nuevo con otro nombre');
            this.obtenerListaSuperheroes();
          }
          this.spinner.hide();
        },
        err => {
          this.spinner.hide();
          console.log(err)
          alert(`Ha ocurrido un error consultando el superhéroe, por favor intenta de nuevo mas tarde`)
        }
      )
    }
  }

  buscarPorCiudad(city){
    this.spinner.show();
    if(city){
      this.conexionApi.getSuperheroePorCiudad(city).subscribe(
        res => {
          this.listaSuperheroes = <any>res;
          if(this.listaSuperheroes.length === 0){
            alert('No se encontro ningun super heroe con la ciudad ingresada, prueba de nuevo con otro ciudad');
            this.obtenerListaSuperheroes();
          }
          this.spinner.hide();
        },
        err => {
          this.spinner.hide();
          console.log(err)
          alert(`Ha ocurrido un error consultando el superhéroe, por favor intenta de nuevo mas tarde`)
        }
      )
    }
  }

}
