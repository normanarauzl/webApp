import {Component} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {ProductoService} from '../../services/producto.service'
import { Producto } from '../../models/producto';
import { GLOBAL } from '../../services/global';

@Component({
    selector:'producto-add',
    templateUrl:'../views/producto-add.component.html',
    providers:[ProductoService]
})

export class ProductosAddComponent{
    public title : string
    public producto:Producto
    public filesToUpload
    public resultUpload

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _productoService:ProductoService
    ){
        this.producto = new Producto(0,'','',0,'')
        this.title = "Pagina para agregar productos"
    }

    ngOnInit(){
		console.log('producto-add.component.ts cargado...');
	}

    onSubmit(){
        
        if(this.filesToUpload.length >=1){
            this._productoService.makeFileRequest(GLOBAL.url+'upload_file',[], this.filesToUpload)
        .then(
            (result)=>{
                this.resultUpload = result
                this.producto.imagen = this.resultUpload.filename
                this.saveProducto()
            },
            (error) =>{
                    console.log(error)
            })
        }else{
            this.saveProducto()
        }
    }

    saveProducto(){
        this._productoService.addProducto(this.producto).subscribe(
            response =>{
                if(response.code == 200){
                    this._router.navigate(['/productos'])
                }else{
                    console.log(response)
                }
            },
            error =>{
                console.log(<any>error)
            }
        )
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files
        console.log(this.filesToUpload)
    }
}