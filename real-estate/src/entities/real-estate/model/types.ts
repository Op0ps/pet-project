import type { Language, Estate } from '../../../shared/types';

export type EstateItem = Pick<
    Estate,
    | 'estateHash'
    | 'estateID'
    | 'estateName'
    | 'estatePart'
    | 'estateCaption'
    | 'mainMiniImgFileName'
    | 'statusType'
    | 'statusCaption'
    | 'metaTitle'
>;

export type InitialState = {
    isLoading: boolean;
    isError: boolean;
    estatePart: number;
    language: Language;
    estates: EstateItem[];
};

export type EstateResponse = {
    statusCode: number;
    data: EstateItem[];
};
export type EstateDetailsResponse = {
    statusCode: number;
    data: Pick<
        Estate,
        | 'estateHash'
        | 'estateName'
        | 'mainImgFileName'
        | 'estateDescription'
        | 'statusCaption'
        | 'statusType'
        | 'images'
    >;
};

export type EstateDetailsRequest = { id: string; language: Language };
