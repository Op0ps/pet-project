// import { useSelector } from 'react-redux';
import {
    RealEstatePreview,
    // selectError,
    // selectLoading,
} from '../../../entities/real-estate/index';
import { AnimateSpinner, ErrorLoadEstate } from '../../../shared';
import { EmtyEstate } from './EmtyEstate';
import { useEstates } from '../lib/useEstates';

export const RealEstates = () => {
    const isError = false;
    const isLoading = false;
    // const isError = useSelector(selectError);
    // const isLoading = useSelector(selectLoading);
    const { filteredEstates } = useEstates();

    if (isLoading) {
        // Ошибка при старте.
        return <AnimateSpinner />;
    }

    if (isError) {
        // Ошибка при старте.
        return <ErrorLoadEstate />;
    }

    if (filteredEstates.length === 0) {
        // КАТЕГОРИЯ обьектов недвижимости пустая или Нет объектов недвижимости вовсе.
        return <EmtyEstate />;
    }

    return (
        <main className="grow p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 first:my-2 xl:first:my-4">
                {filteredEstates.map((item) => {
                    return (
                        <RealEstatePreview key={item.estateHash} item={item} />
                    );
                })}
            </div>
        </main>
    );
};
