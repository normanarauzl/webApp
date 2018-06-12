import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router"

import {HomeComponent} from './components/home/home.component'
import {ErrorComponent} from './components/error/error.component'

const appRoutes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'**', component:ErrorComponent}
]

export const appRoutingProviders:any[] = []
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes)