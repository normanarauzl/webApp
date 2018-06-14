import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component'
import {ErrorComponent} from './components/error/error.component'
import {ProductosListComponent} from './components/productos/productos-list.component'
import {ProductosAddComponent} from './components/productos/producto-add.component'
import {ProductoDetailComponent} from './components/productos/producto.detail.component'

//Rutas
import {routing, appRoutingProviders} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductosAddComponent,
    ProductoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
