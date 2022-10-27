import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {

  constructor(private http: HttpClient,
    ) { }

    getSuperheroes(){
      let url = '/api';
      return this.http.get(url);
    }
}
