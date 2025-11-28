import { Customer }from "../src/method"

describe('Method', () => {
    it('should can have method', () => {
        const cust : Customer = new Customer(
            1,
            "John Doe"
        );

        cust.sayHello("Ten");
    });
})