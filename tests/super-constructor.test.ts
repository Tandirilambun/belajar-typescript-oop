import { Person } from "../src/super-constructor";

describe('Super Constructor', () => {
    class Employee extends Person{
        department: string;

        constructor(name:string, department:string){
            super(name); //memanggil constructor dari parent class (Person)
            this.department = department; //menginisialisasi properti department dari child class (Employee)
        }
    }
    it('it should support super constructor', () : void => {
        const employee : Employee = new Employee("Eko", "IT");
        console.log(employee);
    })
})