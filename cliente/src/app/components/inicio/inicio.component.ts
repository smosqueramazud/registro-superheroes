import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private conexionApi: ConexionApiService) { }

  ngOnInit(): void {
    this.obtenerListaSuperheroes();
  }


  obtenerListaSuperheroes(){
    this.conexionApi.getSuperheroes().subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
