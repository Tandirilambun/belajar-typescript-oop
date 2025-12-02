import { Employee, Manager, VicePresident } from "../src/polymorphism";
import { sayHello } from "../src/type-cast";

describe('Type Cast', () : void => {
    it('it should support Casting type', () : void => {
        sayHello(new Employee("Ten"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePresident("Enma"));
    })
})

