import { Customer, Order } from "../src/class";

describe("Class", () => {
    it("should be able to create a new customer", () => {
        const customer : Customer = new Customer();
        const order = new Order();
        expect(customer).toBeDefined();
    });
});