export interface IQuote {
    id: number;
    text: string;
    authorId: number | undefined;
    source: string;
}
export type QuotesJson = IQuote[];
export type IInitialState = { quotes: QuotesJson };
