import {Injectable} from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/observable'
import {Producto} from '../models/producto'
import {GLOBAL} from './global'
import { ThrowStmt } from '@angular/compiler';

@Injectable()

export class ProductoService{
    public url:string
    constructor(
        public _http: Http
    ){
        this.url = GLOBAL.url
    }

    addProducto(producto: Producto){
        let json = JSON.stringify(producto)
        let params = 'json='+json
        let headers = new Headers({'Content-type':'application/x-www-form-urlencoded'})

        return this._http.post(this.url+'productos', params, {headers}).map(res => res.json())
    }

    getProductos(){
        return this._http.get(this.url + "productos").map(res => res.json())
    }

    getProducto(id){
        return this._http.get(this.url+ 'producto/'+id).map(res=> res.json())        
    }

    makeFileRequest(url:string, params:Array<any>, files:Array<any>){
        return new Promise((resolve, reject)=>{
            var formData : any = new FormData()
            var xhr = new XMLHttpRequest()

            for(var i = 0; i<=files.length; i++){
                formData.append('[uploads]', files[i].name)
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response))
                    }else{
                        reject(xhr.response)
                    }
                }
            }
            xhr.open("POST", url, true)
            xhr.send(formData)
        })
    }
}