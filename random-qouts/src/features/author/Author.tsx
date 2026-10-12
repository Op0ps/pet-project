import { useAppSelector } from '../../app/store/hooks';

export function Author() {
    const author = useAppSelector((state) => state.author);

    return (
        <div className="self-center">
            {author?.birthDay && author?.deathDate ? (
                <div className="text-center text-2xl">
                    {author.name}:{' '}
                    {new Date(Date.parse(author.birthDay)).toLocaleString(
                        'ru-Ru',
                        { day: 'numeric', month: 'numeric', year: 'numeric' },
                    )}
                    {' - '}
                    {new Date(Date.parse(author.deathDate)).toLocaleString(
                        'ru-Ru',
                        { day: 'numeric', month: 'numeric', year: 'numeric' },
                    )}
                </div>
            ) : (
                <div className="text-center text-2xl">{author.name}</div>
            )}
            <p>{author.bio}</p>
        </div>
    );
}
