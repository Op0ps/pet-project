import { useAppSelector } from '../../app/store/hooks';

export function Author() {
    const author = useAppSelector((state) => state.author);

    return (
        <div>
            <cite>{author.name}</cite>
        </div>
    );
}
