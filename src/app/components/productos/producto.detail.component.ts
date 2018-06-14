import {Component} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'

import {ProductoService} from '../../services/producto.service'
import {Producto} from '../../models/producto'

@Component({
    selector:'producto-detail',
    templateUrl:'../views/producto-detail.component.html',
    providers:[ProductoService],
})

export class ProductoDetailComponent{
    public title:string
    public producto:Producto
    
    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _productoService:ProductoService
    ){
        this.title = "Pagina detalle del producto"
    }

    ngOnInit(){
		console.log('producto-detail.component.ts cargado...');
    }
    
    getProducto(id){
        this._route.params.forEach((params:Params)=>{
            let id = params['id']
            this._productoService.getProducto(id).subscribe(
                response=>{
                        if (response.code == 200){
                            this.producto = response.data
                        }else{
                            this._router.navigate(['/productos'])
                        }
                },
                error => {
                    console.log(<any>error)
                }
            )
        })
    }
}