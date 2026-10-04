import { authors } from '../../data/index';
import type { LoaderFunctionArgs, Params } from 'react-router';
import type { IAuthor } from '../../features/author/authorSlice';

export async function loaderDetails(context: LoaderFunctionArgs) {
    return getAuthor(context.params);
}

function getAuthor(params: Params): IAuthor | undefined {
    const key = Number(params?.id);

    // O(1)
    const author = authors.get(key);
    if (!author) {
        return;
    }

    return author;
}
