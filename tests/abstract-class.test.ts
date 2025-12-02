import { Customer } from "../src/abstract-class"

describe("Abstract Class", (): void => {

    //otomatis semua hal yang ada di Customer akan dimiliki oleh RegularCustomer
    class RegularCustomer extends Customer {
        name: string; // apabila ada abstract prop di parent 
        // maka di child classnya harus didefinisikan ulang


        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, i am ${this.name}`)
        }
    }

    it("it should support abstract class", (): void => {
        // const cust2 = new Customer();// akan error karena class Customer ini adalah abstract class
        const cust1 : RegularCustomer = new RegularCustomer(1, "Eko");

        cust1.sayHello("Ten");
    });
})