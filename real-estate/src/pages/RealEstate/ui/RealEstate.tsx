import { RealEstateDetails } from '../../../entities/real-estate/index';
import { useRealEstate } from '../lib/useRealEstate';
import { AnimateSpinner, ErrorLoadEstate } from '../../../shared';

export const RealEstate = () => {
    const { data, isError, isLoading } = useRealEstate();

    if (isLoading) {
        return <AnimateSpinner />;
    }

    if (isError || !data || !data.data) {
        return <ErrorLoadEstate />;
    }

    return (
        <main className="grow m-2">
            {<RealEstateDetails item={data.data} />}
        </main>
    );
};
