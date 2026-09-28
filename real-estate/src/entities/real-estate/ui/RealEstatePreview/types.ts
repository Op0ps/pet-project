import type { Estate } from '../../../../shared/types';

export type EstatePreviewProps = {
    item: Pick<
        Estate,
        | 'estateHash'
        | 'estateName'
        | 'estateCaption'
        | 'mainMiniImgFileName'
        | 'estateID'
        | 'statusCaption'
        | 'statusType'
    >;
};
export type MainCardProps = Pick<
    Estate,
    'estateCaption' | 'estateName' | 'statusCaption' | 'statusType'
>;

export type HeaderCardProps = Pick<Estate, 'mainMiniImgFileName'>;
