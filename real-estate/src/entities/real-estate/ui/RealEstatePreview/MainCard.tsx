import type { MainCardProps } from './types';

export const MainCard = ({
    estateCaption,
    estateName,
    statusCaption,
    statusType,
}: MainCardProps) => {
    return (
        <div className="mb-2 p-2">
            <div className="flex justify-center p-2">
                {/* Title карточки */}
                <h1
                    title={estateName}
                    className="font-bold wrap-break-words line-clamp-2"
                >
                    {estateName}
                </h1>
            </div>

            <div className="flex">
                {statusType === 1 ? (
                    <div className="w-full text-center font-bold p-2 border border-green-800 rounded-md bg-green-700 text-white">
                        {statusCaption}
                    </div>
                ) : (
                    ''
                )}
            </div>

            {/* Описание карточки */}
            <p
                title={estateCaption}
                className="font-base mt-2 wrap-break-words line-clamp-5"
            >
                {estateCaption}
            </p>
        </div>
    );
};
