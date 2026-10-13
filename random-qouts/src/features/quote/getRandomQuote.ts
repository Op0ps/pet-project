import type { IInitialStateJSON } from '../author/IAuthor';
import type { IInitialState } from '../quote/IQuote';

export function getRandomQuote(state: {
    quotes: IInitialState;
    authors: IInitialStateJSON;
}) {
    if (!state.authors.authors || !state.quotes.quotes) {
        return null;
    }

    if (
        state.authors.authors.length === 0 ||
        state.quotes.quotes.length === 0
    ) {
        return null;
    }

    const index = Math.floor(Math.random() * state.quotes.quotes.length);
    const qoute = state.quotes.quotes[index];
    const key = qoute?.authorId;

    // O(n)
    const author = state.authors.authors.find((item) => item.id === key);

    return {
        id: qoute.id,
        text: qoute.text,
        authorId: qoute.authorId,
        source: qoute.source,
        authorName: author?.name,
    };
}
