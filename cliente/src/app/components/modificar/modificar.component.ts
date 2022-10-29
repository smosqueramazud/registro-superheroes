import { Component, OnInit } from '@angular/core';
import { ConexionApiService, Superheroe, SuperheroeActualizar } from 'src/app/services/conexion-api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {

  superheroe: SuperheroeActualizar = {
    id_superheroe:"",
    nombre: "",
    ciudad_operacion: "",
  }

  superHeroe;

  constructor(private conexionApi: ConexionApiService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.superHeroe = false;
    const id_entrada = this.activatedRoute.snapshot.params.id; //recuperamos el id que llega por url
    this.consultarSuperheroe(id_entrada);
  }

  consultarSuperheroe(id:string){
    this.spinner.show();
    if(id){
      this.conexionApi.getSuperheroePorId(id).subscribe(
        res => {
          this.superheroe = res[0];
          this.spinner.hide();
        },
        err => {
          this.spinner.hide();
          console.log(err)
          alert(`Ha ocurrido un error agregando el superhéroe, por favor intenta de nuevo mas tarde`)
        }
      )
    }
  }



  modificarSuperheroe(){
    this.spinner.show();
    let obj = Object.assign({}, this.superheroe); //se copia el objeto 
    delete obj.id_superheroe; //se elimina el id del objeto que se va a enviar al servicio
    this.conexionApi.editarSuperheroe(this.superheroe.id_superheroe, obj).subscribe(
      res => {
        this.spinner.hide();
        this.superHeroe = true;
        alert(`Se ha modificado el superhéroe exitosamente!!`)
      },
      err => {
        this.spinner.hide();
        console.log(err)
        alert(`Ha ocurrido un error agregando el superhéroe, por favor intenta de nuevo mas tarde`)
      }
    );
     this.router.navigate(['/inicio']);
  }

}
