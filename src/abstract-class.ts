export abstract class Customer {
    readonly id : number;
    abstract name : string;

    //properties yang tidak abstract wajib untuk diisikan di constructor
    constructor(id:number)
    {
        this.id = id;
    }

    //tidak wajib untuk diimplementasikan karena bersifat abstract
    abstract sayHello(name:string):void;

    //congcreate method
    hello(){
        console.info("Hello");
    }
}