import { useAppSelector } from '../../app/store/hooks';

export function Qoute() {
    const qoute = useAppSelector((state) => state.qoute);
    const author = useAppSelector((state) => state.author);

    return (
        <div>
            <q>{qoute.text}</q>
            <cite>{author.name}</cite>
        </div>
    );
}
