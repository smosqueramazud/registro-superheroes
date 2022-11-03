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
  movil;
  add = false;

  constructor(private conexionApi: ConexionApiService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.superHeroe = false;
    this.movil = JSON.parse(sessionStorage.getItem('movil'));
  }

    //funcion que consume el servicio de agregar superheroe
  agregarSuperheroe(){
    this.spinner.show();
    delete this.superheroe.id_superheroe;

    if(this.validarCampos()){

      this.validarLogo();

      console.log('ready pal servicio');
      console.log(this.superheroe);

      this.conexionApi.agregarSuperheroe(this.superheroe).subscribe(
      res => {
        this.spinner.hide();
        this.superHeroe = true;
        this.add = true;
        alert(`Se ha agregado el superhéroe exitosamente!!`)
      },
      err => {
        this.spinner.hide();
        console.log(err)
        alert(`Ha ocurrido un error agregando el superhéroe, por favor intenta de nuevo mas tarde`)
      }
    );
    this.superHeroe = true;
    }else{
      this.spinner.hide();
    }

    /* this.router.navigate(['/inicio']); */
  }

  //funcion que valida los campos del formulario
  validarCampos() : boolean{
    if(this.superheroe.nombre === undefined || this.superheroe.nombre === '' || this.superheroe.nombre === null){
      alert('Debe agregar el nombre del superhéroe');
      return false;
    }else if(this.superheroe.grupo === undefined || this.superheroe.grupo === '' || this.superheroe.grupo === null){
      alert('Debe agregar el grupo del superhéroe');
      return false;
    }else if(this.superheroe.ciudad_operacion === undefined || this.superheroe.ciudad_operacion === '' || this.superheroe.ciudad_operacion === null){
      alert('Debe agregar la ciudad del superhéroe');
      return false;
    }else if(this.superheroe.condicion === undefined || this.superheroe.condicion === '' || this.superheroe.condicion === null){
      alert('Debe agregar la condición del superhéroe');
      return false;
    }else if(this.superheroe.superpoder === undefined || this.superheroe.superpoder === '' || this.superheroe.superpoder === null){
      alert('Debe agregar el superpoder del superhéroe');
      return false;
    }else if(this.superheroe.vehiculo === undefined  || this.superheroe.vehiculo === null){
      alert('Debe agregar 1 si el superhéroe tiene vehículo o 0 si no tiene, en el campo Vehiculo');
      return false;
    }else if(this.superheroe.vehiculo !== undefined  || this.superheroe.vehiculo !== null){
      if(Number(this.superheroe.vehiculo) < 0 || Number(this.superheroe.vehiculo) > 1){
        alert('Debe agregar 1 si el superhéroe tiene vehículo o 0 si no tiene, en el campo Vehiculo');
        return false;
      }else if(Number(this.superheroe.vehiculo) === 0 && this.superheroe.tipo_vehiculo === ''){
        this.superheroe.tipo_vehiculo = 'No tiene';
        return true;
      }else if(isNaN(Number(this.superheroe.vehiculo))){
        alert('Debes agregar un número en el campo Vehículo, 1 si el superhéroe tiene vehículo o 0 si no tiene');
        return false;
      }else if(this.superheroe.tipo_vehiculo === undefined || this.superheroe.tipo_vehiculo === '' || this.superheroe.tipo_vehiculo === null){
        alert('Debe agregar un tipo de vehículo');
        return false;
      }else{
        return true;
      }
    }else{
      return true;
    }
    
  }

  //funcion que valida si una url es valida segun la cadena que llega
  isUrl(url) : boolean {   
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(url);
  }

  //funcion que valida el campo logo
  validarLogo(){
    if(this.superheroe.logo === undefined || this.superheroe.logo === '' || this.superheroe === null){
      alert('No se ingreso ninguna URL para el logo, se agregara automaticamente un logo por defecto');
      this.superheroe.logo = 'https://i.pinimg.com/originals/5d/f4/67/5df4673494d1436919de9aa49e5532bd.png';
      console.log('se agrego el logo por defecto');
    }else if(!this.isUrl(this.superheroe.logo)){
      alert('No se ingreso una URL válida, se agregara automaticamente un logo por defecto');
      this.superheroe.logo = 'https://i.pinimg.com/originals/5d/f4/67/5df4673494d1436919de9aa49e5532bd.png';
      console.log('se agrego el logo por defecto');
    }else{
      console.log('llego con logo valido');
      console.log(this.superheroe.logo);
    }
  }



}
