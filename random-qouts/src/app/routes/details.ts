import type { LoaderFunctionArgs, Params } from 'react-router';
import authors from '../../../data/author.json';
type AuthorKey = keyof typeof authors;

export async function loaderDetails(context: LoaderFunctionArgs) {
    return getAuthor(context.params);
}

function getAuthor(params: Params): IAuthorDetails {
    const key = params.id?.toString() as AuthorKey;
    const author = authors[key];

    return {
        id: key,
        name: author.name,
        bio: author.bio,
        birthDay: author.birthDay || '',
        deathDate: author.deathDate || '',
    };
}

export interface IAuthorDetails {
    id: string;
    name: string;
    bio: string;
    birthDay: string;
    deathDate: string;
}
