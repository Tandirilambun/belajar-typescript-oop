import { MathUtils } from "../src/namespace"

describe("Namespace", (): void => {
    it("should support static class", (): void => {
        console.info(MathUtils.sum(1, 2, 3, 4, 5));
        console.info(MathUtils.PI);
    });
});