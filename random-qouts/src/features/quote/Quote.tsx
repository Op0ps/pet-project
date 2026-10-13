import { Link } from 'react-router';
import { useAppSelector } from '../../app/store/hooks';
import { getRandomQuote } from './getRandomQuote';

export function Quote() {
    const authors = useAppSelector((state) => state.authors);
    const quotes = useAppSelector((state) => state.quotes);
    const randomQuote = getRandomQuote({ authors, quotes });

    if (!randomQuote) {
        return <></>;
    }

    const authorLink = randomQuote?.authorName ? (
        <Link
            className="p-2 rounded-md bg-amber-200"
            to={{
                pathname: `/details/${randomQuote.authorId}`,
            }}
        >
            {randomQuote.authorName}
        </Link>
    ) : (
        <p className="p-2 rounded-md bg-amber-200">Автор не известный</p>
    );

    return (
        <div className="flex gap-2">
            <q className="text-xl p-2">{randomQuote.text}</q>
            {authorLink}
        </div>
    );
}
