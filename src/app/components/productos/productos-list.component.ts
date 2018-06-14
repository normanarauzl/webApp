import {Component } from '@angular/core'
import {Router,ActivatedRoute, Params} from '@angular/router'
import {ProductoService} from '../../services/producto.service'
import { Producto } from '../../models/producto';

@Component({
    selector:'producto-list',
    templateUrl: '../views/productos-list.component.html',
    providers:[ProductoService]
})

export class ProductosListComponent{
    public title:string
    public productos:Producto[]

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _productoService:ProductoService
    ){
        this.title = 'Lista de productos'
    }
    ngOnInit(){
        //console.log(this._productoService.getProductos())
        this._productoService.getProductos().subscribe(
            result =>{
                this.productos = result.data
                if (result.code != 200){
                    console.log(result)
                }else{
                    
                }
            },
            error =>{
                console.log(<any>error)
            }
        )
    }
}