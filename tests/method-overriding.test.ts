import { Employee } from "../src/method-overriding"

describe('Method Overriding', () => {
    class Manager extends Employee {
        sayHello(name: string): void { //mendeklarasikan ulang method sayHello dari parent class Employee
            console.info(`Hello ${name}, my name is ${this.name}, I am your manager`);
        }
    }

    it('it should support method overriding', (): void => {
        //jika menjalankan code ini
        // maka method sayHello yang akan dijalankan adalah
        // method sayHello yang ada pada class Manager
        const manager: Manager = new Manager("Eko");
        manager.sayHello("Ten");
    })

    it('it should support method overriding', (): void => {
        //jika menjalankan code ini
        // maka method sayHello yang akan dijalankan adalah
        // method sayHello yang ada pada class Employee
        const employee: Employee = new Employee("Eko");
        employee.sayHello("Ten");
    })

    //tergantung dari object mana yang dibuat/diarahkan ke method tersebut
    // maka method yang dijalakan adalah method yang ada pada class tersebut
    // walaupun nama methodnya sama
})