import type { MainImgProps } from './types';
import { PATH } from '../../../../shared/lib/constants';

export const MainImg = ({ mainImgFileName }: MainImgProps) => {
    return (
        <div>
            <img
                src={`${PATH}/${mainImgFileName}`}
                alt="main img"
                className="aspect-square object-cover lg:aspect-auto h-80 p-2 rounded-2xl"
            />
        </div>
    );
};
