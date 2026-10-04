import authorsJson from '../../data/author.json';
import qoutesJson from '../../data/qoutes.json';
import type { AuthorsJson, Author } from './Author';
import type { QoutesJson } from './Qoute';

const authors = new Map<number, Author>();

// O(n) один нраз при загрузке.
for (const author of authorsJson as AuthorsJson) {
    authors.set(author.id, author);
}
export const qoutes = qoutesJson as QoutesJson;
export { authors };
