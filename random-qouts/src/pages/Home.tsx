import { Qoute } from '../entities/qoute/index';
import { Author } from '../entities/autor/index';
import type { IAuthor } from '../entities/autor/index';
import type { IQoute } from '../entities/qoute/index';

export function Home() {
    const qoute: IQoute = {
        id: 1,
        authorId: 1,
        text: 'Full pages or large parts of a page in nested routing.',
        source: null,
        createdAt: new Date(2026, 29, 9),
        updatedAt: new Date(2026, 29, 9),
    };
    const author: IAuthor = {
        id: 1,
        name: 'Hrygorii',
        bio: '',
        bithDate: new Date(1889, 20, 4),
        deathhDate: new Date(1945, 30, 4),
        createdAt: new Date(2026, 29, 9),
        updatedAt: new Date(2026, 29, 9),
    };

    return (
        <main>
            <div>
                <Qoute qoute={qoute} />
                <Author author={author} />
            </div>
        </main>
    );
}
