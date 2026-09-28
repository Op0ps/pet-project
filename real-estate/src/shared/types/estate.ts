export interface Estate {
    estateHash: string; // ранее этот хеш передавался в генерации пути.
    estateID: number; // ID - обьекта.
    estateName: string; // Заглавие обьекта.
    estatePart: number; // Категория обьекта.
    estateCaption: string; // Сокращенное описание обьекта.
    mainMiniImgFileName: string; // Мини фото.
    statusType: number; // Продан ли данный обьект.
    orderId?: number; // Порядковый номер
    estateScrollerDescription: string; // Сокращенное описание обьекта в банере.
    mainImgFileName: string; // Главное фото.
    estateDescription: string; // Полное описание обьекта.
    metaTitle?: string; // Мета данные к странице.
    metaDescription?: string; // Мета данные к описанию странице.
    metaKeywords?: string; // Ключевые слова как мета данные.
    statusCaption: string; // Продан ли данный обьект.
    images: EstatePhoto[];
}
export interface EstatePhoto {
    photoId: number;
    estateID: number;
    orderId: number;
    caption: string;
    photoListImg: string;
    photoListMiniImg: string;
}
