import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OpenweatherService {
  constructor(private http: HttpClient) {}

  getTiempo(ciudad: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ ciudad +'&appid=8cc733c25f1ca7e030060d4345bf4472&units=metric&lang=es');
  }
}
