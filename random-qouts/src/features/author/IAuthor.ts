export interface IAuthor {
    id: number;
    name: string;
    bio: string;
    birthDay: string | null;
    deathDate: string | null;
}
export type AuthorIndex = Map<number, IAuthor>;
export type AuthorsJson = IAuthor[];
export type IInitialStateAuthor = { author: IAuthor | null };
export type IInitialStateJSON = { authors: AuthorsJson };
