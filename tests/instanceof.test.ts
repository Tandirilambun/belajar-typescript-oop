import { Employee, Manager } from "../src/instanceof"

describe('instanceof', (): void => {
    it('it should support instanceof', (): void => {
        const budi = new Employee();
        const eko = new Manager();

        // typeof(budi) // akan return "object" karena typeof digunakan untuk cek tipedata saja
        // typeof(eko) // akan return "object"

        const emp : boolean = budi instanceof Employee;
        const mgr : boolean = eko instanceof Employee;

        expect(emp).toBe(true);
        expect(mgr).toBe(false);
    });
})