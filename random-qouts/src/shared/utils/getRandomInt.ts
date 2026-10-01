import qoutes from '../../../data/qoutes.json';
import authors from '../../../data/author.json';
type AuthorKey = keyof typeof authors;

export function getRandomQoute() {
    const index = Math.floor(Math.random() * (qoutes.length + 1));
    const qoute = qoutes[index];
    const key = qoute.authorId.toString();
    const author = authors[key as AuthorKey];

    return {
        qoute: qoute,
        author: author,
    };
}
