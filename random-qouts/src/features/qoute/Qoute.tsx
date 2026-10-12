import { useAppSelector } from '../../app/store/hooks';

export function Qoute() {
    const qoute = useAppSelector((state) => state.qoute);

    return (
        <div className="flex gap-2">
            <q className="text-xl p-2">{qoute.text}</q>

            {qoute?.authorName ? (
                <a
                    className="p-2 rounded-md bg-amber-200"
                    href={`/details/${qoute.authorId}`}
                >
                    {qoute.authorName}
                </a>
            ) : (
                <p className="p-2 rounded-md bg-amber-200">
                    Автор не известный
                </p>
            )}
        </div>
    );
}
