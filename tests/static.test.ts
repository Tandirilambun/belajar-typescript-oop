import { Configuration, MathUtil } from "../src/static"

describe("Static", (): void => {
    it("should support static properties", (): void => {
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    });
    it("should support static class", (): void => {
        console.info(MathUtil.sum(1, 2, 3, 4, 5));
    });
});

//Key Notes:
// Static member hanya bisa mengakses static member lainnya, tidak bisa mengakses non static member, kecuali dari object
// Sedangkan untuk non static member, bisa mengakses static member secara langsung
