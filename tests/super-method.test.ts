import { Employee } from "../src/super-method";

describe('Super Method', () => {
    class Manager extends Employee{
        sayHello(name:string):void{
            super.sayHello(name); // mengimplementasikan method sayHello dari parent class 
            console.info(`And, I am your manager`);
        }
    }

    it('it should support super method', () => {
        const manager = new Manager("Eko");
        manager.sayHello("Ten");
    });
});