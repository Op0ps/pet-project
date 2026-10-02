import { useAppSelector } from '../../app/store/hooks';

export function Qoute() {
    const qoute = useAppSelector((state) => state.qoute);

    return (
        <div>
            <q>{qoute.text}</q>

            <a href={`details/${qoute.authorId}`}>
                <cite>{qoute.authorName}</cite>
            </a>
        </div>
    );
}
