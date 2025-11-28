export class Customer {
    readonly id : number;
    name: string;
    age? : number;

    constructor(id:number, name:string){
        this.name = name;
        this.id = id;
    }

    //method
    sayHello(name:string) :void{
        console.info(`Hello ${name}, my name is ${this.name}`);
    }
}