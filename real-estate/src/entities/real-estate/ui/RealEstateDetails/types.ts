import type { Estate } from '../../../../shared/types';

export type EstateDetailsProps = {
    item: Pick<
        Estate,
        | 'estateName'
        | 'mainImgFileName'
        | 'estateDescription'
        | 'images'
        | 'statusCaption'
        | 'statusType'
    >;
};
export type MainImgProps = Pick<Estate, 'mainImgFileName'>;
export type MainCardProps = Pick<Estate, 'estateDescription'>;
export type StatusEstateProps = Pick<Estate, 'statusCaption'>;
export type ImgPanelProps = Pick<Estate, 'images'>;
export type HeaderCardProps = Pick<
    Estate,
    'estateName' | 'statusCaption' | 'statusType'
>;
