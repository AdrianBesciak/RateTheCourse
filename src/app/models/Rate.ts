import { RatingHistoryRecord } from './RatingHistoryRecord';
export class Rate {
    sumOfRates: number;
    countOfRates: number;
    ratingHistory: Array<RatingHistoryRecord>;

    constructor() {
        this.sumOfRates = 0;
        this.countOfRates = 0;
        this.ratingHistory = new Array<RatingHistoryRecord>();
    }

    addRate(rate : number, user: string) {
        var flag : Boolean;
        flag = true;
        this.ratingHistory.forEach(element => {
            if (element.user === user)
                flag = false;
        });
        if (flag)
        {
            this.ratingHistory.push(new RatingHistoryRecord(user, rate));
            this.sumOfRates = this.sumOfRates + rate;
            this.countOfRates = this.countOfRates + 1;
        }
        
    }

    deleteRate(rate : number) {
        this.sumOfRates = this.sumOfRates - rate;
        this.countOfRates = this.countOfRates - 1;
    }

    getRate()  {
        if (this.countOfRates == 0)
            return 0;
        else
            return +(this.sumOfRates / this.countOfRates).toFixed(2);
    }
}