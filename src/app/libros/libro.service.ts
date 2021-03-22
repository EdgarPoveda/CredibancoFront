import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  urlEndPonit: string = "http://localhost:8089/librosFront";

  /*  getLibros(): Observable<Libro[]> {
    // metodo encargado de extraer los libros del API rest
    // se convirte en un flujo de datos con operador of de tipo Observable
      return this.http.get(this.urlEndPonit).pipe(
        //se mapea a un array de tipo Libro
        map((response) => response as Libro[])
      );
    };*/

  //tambien se puede hacer implicito el casteo de Response a Array de tipo Libro
  getLibros(): Observable<Libro[]> {
    // se convirte en un flujo de datos con operador of de tipo Observable
    return this.http.get<Libro[]>(this.urlEndPonit);
  };
  constructor(private http: HttpClient) {
  }
}
