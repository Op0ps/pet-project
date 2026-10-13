import { useParams } from 'react-router';
import { useAppSelector } from '../../app/store/hooks';

export function Author() {
    const params = useParams<{ id: string }>();
    const data = useAppSelector((state) => state.authors);
    // O(n)
    const author = data.authors.find((item) => item.id === Number(params.id));

    if (!author) {
        return <></>;
    }

    const authorDate =
        author?.birthDay && author?.deathDate ? (
            <div className="text-center text-2xl">
                {author.name}:{' '}
                {new Date(Date.parse(author.birthDay)).toLocaleString('ru-Ru', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                })}
                {' - '}
                {new Date(Date.parse(author.deathDate)).toLocaleString(
                    'ru-Ru',
                    { day: 'numeric', month: 'numeric', year: 'numeric' },
                )}
            </div>
        ) : (
            <div className="text-center text-2xl">{author.name}</div>
        );

    return (
        <div className="self-center">
            {authorDate}
            <p>{author.bio}</p>
        </div>
    );
}
