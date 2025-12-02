//biasanya static properties memiliki nama prop dengan huruf kapital semua
//sehingga akan mudah untuk membedakan static dan non static properties

export class Configuration {
    static NAME: string = "Belajar TypeScript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Tandirilambun"
}

export class MathUtil {
    static sum(...values: number[]): number {
        let total = 0;
        for (const value of values) {
            total += value;
        }
        return total;
    }
}