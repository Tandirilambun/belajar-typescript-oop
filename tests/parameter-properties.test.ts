import {Person} from "../src/parameter-properties"

describe('Parameter Properties', (): void => {
    it('it should support parameter properties', (): void => {
        //akan otomatis set prop name menjadi "Eko"
        const person : Person = new Person("Eko");
        expect(person.name).toBe("Eko");

        const person2 :Person = new Person();
        person2.name = "Ten"; // akan mengubah value properties name
        expect(person2.name).toBe("Ten");

        person.name = "Enma"; // akan mengubah value properties name dari "Eko" menjadi "Enma"
        expect(person.name).toBe("Enma");

    });
})