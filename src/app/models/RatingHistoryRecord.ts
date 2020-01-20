export class RatingHistoryRecord {
    user: string;
    rate: number;

    constructor(user: string, rate:number)
    {
        this.user = user;
        this.rate = rate;
    }
}