export interface Company {
    _id?: string;
    name: string;
    ticker: string;
    exchange: string;
    isin: string;
    website?: string;
    updatedAt?: Date;
    createdAt?: Date;
}