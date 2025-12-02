import { ValidationError } from "../src/error-handling"

describe("Error handling", (): void => {

    function doubleIt(value: number): number {
        if (value < 0) {
            throw new ValidationError("Value cannot be less than 0");
        }

        return value + 2;
    }

    it("should support custom class Error Handling", (): void => {
        doubleIt(-1);
    });
    it("should support custom try catch", (): void => {
        try {
            const result = doubleIt(-1);
            console.info(result);
        }
        catch (e) {
            if (e instanceof ValidationError) {
                console.info(e.message);
            }
        }
    });
});

//Tidak disarankan akan membuat missleading
