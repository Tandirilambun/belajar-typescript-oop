export class Person{
    // name akan otomatis dijadikan properties dari class Person tanpa harus membuat prop name
    // sehingga parameter constructor yang ada kata kunci visibilitynya akan otomatis dijadikan properties
    constructor(public name:string = ""){
    }

    // name : string;
    // constructor(name :string){
    //     this.name = name
    // }
    //alih alih membuat constructor yang akan parameternya akan diset menjadi properties
    //akan lebih mudah jika menggunakan parameter properties 
}