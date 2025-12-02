import {Person, Customer} from "../src/class-relationship"

describe("Class Relationship", (): void => {
    it("should support class relationship", (): void => {
        const person : Person = new Customer("Ten");

        console.log(person.name);
    });
});

//Tidak disarankan akan membuat missleading
