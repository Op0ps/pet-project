import { Link } from 'react-router';

import { HeaderCard } from './HeaderCard';
import { MainCard } from './MainCard';
import type { EstatePreviewProps } from './types';

export const RealEstatePreview = ({ item }: EstatePreviewProps) => {
    return (
        <Link
            to={`estate/${item.estateID}`}
            className="max-w-sm max-h-min p-2 cursor-pointer bg-gray-500 hover:bg-gray-400 rounded-xl shadow-md shadow-gray-400"
        >
            {/* Изображение карточки */}
            <HeaderCard mainMiniImgFileName={item.mainMiniImgFileName} />

            {/* Main card */}
            <MainCard
                statusType={item.statusType}
                statusCaption={item.statusCaption}
                estateCaption={item.estateCaption}
                estateName={item.estateName}
            />

            {/* Footer card  */}
        </Link>
    );
};
