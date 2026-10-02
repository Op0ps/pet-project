import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Author } from '../features/author/Author';
import { useAppDispatch } from '../app/store/hooks';
import { setAuthor } from '../features/author/authorSlice';
import type { IAuthorDetails } from '../app/routes/details';

export function Details() {
    const data = useLoaderData<IAuthorDetails>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setAuthor(data));
    }, [dispatch, data]);

    return (
        <main>
            <Author />
        </main>
    );
}
