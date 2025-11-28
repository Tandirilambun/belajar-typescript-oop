import { Customer } from "../src/prop-and-fields";

describe("Prop and Fields", () => {
    it("should be able to create a new customer", () => {
        const customer : Customer = new Customer("1", "John Doe");
        
        customer.age = 20;
        console.log(customer);

        const cusname :string = customer.name;
        const cusid :string = customer.id;

        expect(cusname).toBe("John Doe");
        expect(cusid).toBe("1");
        expect(customer.age).toBe(20);

        console.log(cusname);
        console.log(cusid);
        console.log(customer.age);
    });

    it("should be able to create a new customer with default address", () => {
        const customer : Customer = new Customer("1", "John Doe");
        console.log(customer);
        expect(customer.address).toBe("Jakarta");

        customer.address = "Surabaya";

        expect(customer.address).toBe("Surabaya");

        console.log(customer.address);
    });
});