import authorsJson from '../../data/author.json';
import qoutesJson from '../../data/qoutes.json';
import type { AuthorsJson } from '../features/author/IAuthor';
import type { QuotesJson } from '../features/quote/IQuote';

// const authors: AuthorIndex = new Map();

// // O(n) один нраз при загрузке.
// for (const author of authorsJson as AuthorsJson) {
//     authors.set(author.id, author);
// }
// export { authors };
export const authors = authorsJson as AuthorsJson;
export const quotes = qoutesJson as QuotesJson;
