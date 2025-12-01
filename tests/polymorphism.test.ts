import { Employee, Manager, sayHello, VicePresident } from "../src/polymorphism"


describe('Polymorphism', (): void => {
    it('it should support polymorphism', (): void => {
        let employee: Employee = new Employee("Budi");

        employee = new Manager("Eko");

        employee = new VicePresident("Ten");

        //merupakan bentuk dari polymorphism
        //kenapa ini bisa terjadi karena class Manager dan VicePresident
        //merupakan turunan dari class Employee sehingga TS memperbolehkannya berubah bentuk ke class turunannya
        //polymorphism hanya bekerja untuk class class turunan 
        //sehingga apabila ingin merubah dari int ke string itu tidak diperbolehkan (error)
        //kenapa harus class turunan, karena secar otomatis class turunannya itu akan mengimpelementasikan
        //apapun yang ada di class parentnya
    });

    it('it should support polymorphism method', (): void => {
        sayHello(new Employee("Tenten"));
        sayHello(new Manager("Enma"));
        sayHello(new VicePresident("Star"));
    })
})