export class Employee {
    name: string;

    constructor(name : string){
        this.name = name;
    }
}

// Otomatis segala informasi dari class Employee juga dimiliki oleh class Manager
export class Manager extends Employee
{

}

//Otomatis segala informasi yang ada dari class Manager serta Employee
//dimiliki juga oleh class Director
export class Director extends Manager{

}