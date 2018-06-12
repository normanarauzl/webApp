import {Component} from '@angular/core'

@Component({
    selector:'error',
    templateUrl:'../views/error.html',
})

export class ErrorComponent{
    public title:string
    constructor(){
        this.title = "Error 404 - Page Not Found"
    }

    ngOnInit(){
        console.log("Cargado componente Error!!")
    }
}