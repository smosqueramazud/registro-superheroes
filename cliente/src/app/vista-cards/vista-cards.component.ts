import { Component, OnInit } from '@angular/core';
import { ConexionApiService, Superheroe } from 'src/app/services/conexion-api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-cards',
  templateUrl: './vista-cards.component.html',
  styleUrls: ['./vista-cards.component.scss']
})
export class VistaCardsComponent implements OnInit {

  //ce crea la lista de superheroes con la interface Superheore
  listaSuperheroes: Superheroe[];

  constructor(private conexionApi: ConexionApiService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.listaSuperheroes = window.history.state.array;
    if(this.listaSuperheroes === undefined){
      this.obtenerListaSuperheroes();
    }



  let arrayOrdenado = this.listaSuperheroes.sort( (a, b) => {
      if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1;
      }
      if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    console.log(arrayOrdenado); 
    
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
}
