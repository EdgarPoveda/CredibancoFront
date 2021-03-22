import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer-component';
import { LibrosComponent } from './libros/libros.component';
import { LibroService } from './libros/libro.service';
import { RouterModule, Routes } from '@angular/router';
//se crea la constante con el array de las rutas disponibles
const routes: Routes = [{ path: '', redirectTo: '/libros', pathMatch: 'full' },
{ path: 'libros', component: LibrosComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
