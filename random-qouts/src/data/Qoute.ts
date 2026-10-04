interface Qoute {
    id: number;
    text: string;
    authorId: number | undefined;
    source: string;
}

export type QoutesJson = Qoute[];
