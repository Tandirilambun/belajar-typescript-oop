import { HasName, CanSayHello } from "../src/interface-inheritance";

describe('Interface Inheritance', () => {
    //jika kita mengimplementasikan interface contoh HasName dan CanSayHello
    //maka kita wajib mengimplementasikan semua properti dan method yang ada di interface tersebut
    class Person implements HasName, CanSayHello {
        name: string; // mengimplementasikan properti name dari interface HasName

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('it should support interface inheritance', (): void => {
        const person: Person = new Person("Ten");
        person.sayHello("Eko");
    })
})