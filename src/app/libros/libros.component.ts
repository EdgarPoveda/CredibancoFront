import { Component, OnInit } from '@angular/core';
import { Libro } from './libro';
import { LibroService } from './libro.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})
export class LibrosComponent implements OnInit {
  librosLista: Libro[];

//se inyecta la dependencia del service
  constructor(private libroService: LibroService) {
  }

  ngOnInit(): void {
    //this.librosLista =
     this.libroService.getLibros().subscribe(
    (librox) => {this.librosLista = librox}
     );
  }

}
