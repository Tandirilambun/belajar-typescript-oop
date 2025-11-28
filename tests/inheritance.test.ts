import {Employee, Manager, Director} from "../src/inheritance"

describe('Inheritance', () => {
    it('it should support inheritance', () : void => {
        const emp : Employee = new Employee("Ten");
        const mgr : Manager = new Manager("Eko");
        const dir : Director = new Director("Enma");
        //mengapa mgr dan dir harus memasukkan nama
        //Karena segala informasi yang ada di class Employee termasuk constructor
        //Juga diwariskan ke Manager dan Director  

        console.log(emp);
        console.log(mgr);
        console.log(dir);
    });
})