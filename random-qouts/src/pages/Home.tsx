import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { useAppDispatch } from '../app/store/hooks';
import { Quote } from '../features/quote/Quote';
import { setAuthors } from '../features/author/authorsSlice';
import { setQuotes } from '../features/quote/quotesSlice';
import type { AuthorsJson } from '../features/author/IAuthor';
import type { QuotesJson } from '../features/quote/IQuote';

export function Home() {
    const data = useLoaderData<
        { quotes: QuotesJson; authors: AuthorsJson } | undefined
    >();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            dispatch(setAuthors(data.authors));
            dispatch(setQuotes(data.quotes));
        }
    }, [dispatch, data]);

    return (
        <main className="flex-1 flex justify-center items-center bg-amber-400">
            <Quote />
        </main>
    );
}
