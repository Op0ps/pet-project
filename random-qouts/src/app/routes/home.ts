import qoutes from '../../../data/qoutes.json';
import authors from '../../../data/author.json';
type AuthorKey = keyof typeof authors;
export interface IRandomQoute {
    id: number;
    text: string;
    authorId: number;
    authorName: string;
    source: string;
}

export async function loaderHome() {
    return getRandomQoute();
}

function getRandomQoute(): IRandomQoute {
    const index = Math.floor(Math.random() * (qoutes.length + 1));
    const qoute = qoutes[index];
    const key = qoute.authorId.toString() as AuthorKey;
    const author = authors[key];

    return {
        id: qoute.id,
        text: qoute.text,
        authorId: qoute.authorId,
        source: qoute.source,
        authorName: author.name,
    };
}
