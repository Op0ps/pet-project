import type { HeaderCardProps } from './types';
import { PATH } from '../../../../shared/lib/constants';

export const HeaderCard = ({ mainMiniImgFileName }: HeaderCardProps) => {
    return (
        <div className="mb-2 p-2">
            {/* Фото карточки */}
            <img
                src={`${PATH}/${mainMiniImgFileName}`}
                alt="real estate"
                className="aspect-square w-full object-cover h-52 xl:aspect-auto rounded-md"
            />
        </div>
    );
};
