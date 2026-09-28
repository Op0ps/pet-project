import { StatusEstate } from './StatusEstate';
import type { HeaderCardProps } from './types';

export const HeaderCard = ({
    estateName,
    statusCaption,
    statusType,
}: HeaderCardProps) => {
    return (
        <div className="flex justify-between md:grid-cols-3 mt-2">
            {/* Title */}
            <h1
                className="p-2 font-bold wrap-break-words line-clamp-2"
                title={estateName}
            >
                {estateName}
            </h1>
            {/* status estate */}

            {Number(statusType) === 1 && (
                <StatusEstate statusCaption={statusCaption} />
            )}
        </div>
    );
};
