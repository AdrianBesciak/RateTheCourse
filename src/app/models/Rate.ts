export class Rate {
    sumOfRates: number;
    countOfRates: number;

    constructor() {
        this.sumOfRates = 0;
        this.countOfRates = 0;
    }

    addRate(rate : number) {
        this.sumOfRates = this.sumOfRates + rate;
        this.countOfRates = this.countOfRates + 1;
    }

    deleteRate(rate : number) {
        this.sumOfRates = this.sumOfRates - rate;
        this.countOfRates = this.countOfRates - 1;
    }

    getRate() : number {
        return this.sumOfRates / this.countOfRates;
    }
}