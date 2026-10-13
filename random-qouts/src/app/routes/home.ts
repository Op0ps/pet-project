import { authors, quotes } from '../../data/index';

export async function loaderHome() {
    return {
        quotes: quotes,
        authors: authors,
    };
}
