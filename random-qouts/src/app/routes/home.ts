import type { IQoute } from '../../features/qoute/qouteSlice';
import { authors, qoutes } from '../../data/index';

export async function loaderHome() {
    return getRandomQoute();
}

function getRandomQoute(): IQoute {
    const index = Math.floor(Math.random() * qoutes.length);
    const qoute = qoutes[index];
    const key = Number(qoute?.authorId);
    const author = authors.get(key);

    return {
        id: qoute.id,
        text: qoute.text,
        authorId: qoute.authorId,
        source: qoute.source,
        authorName: author?.name,
    };
}
