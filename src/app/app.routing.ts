import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router"

import {HomeComponent} from './components/home/home.component'
import {ErrorComponent} from './components/error/error.component'
import {ProductosListComponent} from './components/productos/productos-list.component'
import {ProductosAddComponent} from './components/productos/producto-add.component'
import {ProductoDetailComponent} from './components/productos/producto.detail.component'

const appRoutes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'productos', component:ProductosListComponent},
    {path:'crear-producto', component:ProductosAddComponent},
    {path:'producto/:id', component:ProductoDetailComponent},
    {path:'**', component:ErrorComponent},
]

export const appRoutingProviders:any[] = []
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes)