import {Component } from '@angular/core'
import {Router,ActivatedRoute, Params} from '@angular/router'

@Component({
    selector:'producto-list',
    templateUrl: '../views/productos-list.html'
})

export class ProductosListComponent{
    public title:string

    constructor(
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.title = 'Lista de productos'
    }
    ngOnInit(){
        console.log('Productos list component cargado!!')
    }
}