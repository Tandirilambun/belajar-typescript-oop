import { Counter } from "../src/visibility"

describe('Visibility', (): void => {

    class DoubleCounter extends Counter {
        public increment(): void {
            this.counter += 2;
        }
    }
    it('should support private visibility', (): void => {
        const count : Counter = new Counter();

        // count.counter = 10; // tidak bisa karena prop counter bersifat private 
        count.increment();
        count.increment();
        count.increment();

        const datacount = count.getCounter();

        expect(datacount).toBe(3);
    });

    it('should support protected visibility', (): void => {
        const count : DoubleCounter = new DoubleCounter();

        // count.counter = 10; // tidak bisa karena prop counter bersifat private 
        count.increment();
        count.increment();
        count.increment();

        const datacount = count.getCounter();

        expect(datacount).toBe(6);
    });
});