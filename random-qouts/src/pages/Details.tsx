import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Author } from '../features/author/Author';
import { useAppDispatch } from '../app/store/hooks';
import { setAuthor } from '../features/author/authorSlice';
import type { IAuthor } from '../features/author/authorSlice';

export function Details() {
    const data = useLoaderData<IAuthor | undefined>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            dispatch(setAuthor(data));
        }
    }, [dispatch, data]);

    return (
        <main>
            <Author />
        </main>
    );
}
