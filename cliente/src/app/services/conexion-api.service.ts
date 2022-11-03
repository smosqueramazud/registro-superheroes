import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {

  constructor(private http: HttpClient,
    ) { }

    //servicio que trae todos los superheroes
    getSuperheroes(){
      let url = '/api';
      return this.http.get(url);
    }

    //servicio que trae un superheroe por su nombre
    getSuperheroePorNombre(nombre: string){
      let url = '/api/nombre/';
      return this.http.get(url + nombre);
    }

    //servicio que trae un superheroe por su ciudad
    getSuperheroePorCiudad(ciudad: string){
      let url = '/api/ciudad/';
      return this.http.get(url + ciudad);
    }

    //servicio para agregar un superheroe
    agregarSuperheroe(obj: Superheroe){
      let url = '/api';
      return this.http.post(url,obj);
    }

    //servicio para agregar un superheroe
    eliminarSuperheroe(id:string){
      let url = '/api/';
      return this.http.delete(url + id);
    }

    //servicio para agregar un superheroe
    editarSuperheroe(id:string, obj:SuperheroeActualizar){
      let url = '/api/';
      return this.http.put(url + id, obj);
    }

    //servicio que trae un superheroe por su nombre
    getSuperheroePorId(id: string){
      let url = '/api/id/';
      return this.http.get(url + id);
    }
    
}

export interface Superheroe{
  id_superheroe?:string;
  nombre?: string;
  grupo?: string;
  ciudad_operacion?: string;
  condicion?: string;
  superpoder?: string;
  vehiculo?: number;
  tipo_vehiculo?: string;
  logo: string;
}

export interface SuperheroeActualizar{
  id_superheroe?:string;
  nombre?: string;
  ciudad_operacion?: string;
}
