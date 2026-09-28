import type { MainCardProps } from './types';

export const MainCard = ({ estateDescription }: MainCardProps) => {
    return (
        <div className="p-2">
            <div
                dangerouslySetInnerHTML={{ __html: estateDescription }}
                className="font-medium mt-2"
            />
        </div>
    );
};
