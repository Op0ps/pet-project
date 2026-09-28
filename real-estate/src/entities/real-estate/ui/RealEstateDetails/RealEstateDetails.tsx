import { HeaderCard } from './HeaderCard';
import { MainImg } from './MainImg';
import { MainCard } from './MainCard';
import { ImgPanel } from './ImgPanel';

import type { EstateDetailsProps } from './types';

export const RealEstateDetails = ({ item }: EstateDetailsProps) => {
    return (
        <div className="p-2 my-2 lg:my-4 bg-gray-400 rounded-md">
            <HeaderCard
                estateName={item.estateName}
                statusCaption={item.statusCaption}
                statusType={item.statusType}
            />

            <MainImg mainImgFileName={item.mainImgFileName} />

            <MainCard estateDescription={item.estateDescription} />

            <div className="h-px my-4 bg-gray-500 w-full" />

            <ImgPanel images={item.images} />
        </div>
    );
};
