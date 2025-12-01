export class Employee{
    name: string;
    constructor(name:string){
        this.name = name;
    }

    sayHello(name:string):void{
        console.info(`Hello ${name}, my name is ${this.name}`);
    }
}