export interface Author {
    id: number;
    name: string;
    bio: string;
    birthDay: string;
    deathDate: string;
}

export type AuthorsJson = Author[];
