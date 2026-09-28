import { useSelector } from 'react-redux';
import { useMemo } from 'react';
// import { selectEstatePart, selectEstates } from '../../../entities/real-estate';
import { selectEstatePart } from '../../../entities/real-estate';

import data_estates from '../../../../data/data.json';

export const useEstates = () => {
    // const estates = useSelector(selectEstates);
    const estates = data_estates;
    const estatePart = useSelector(selectEstatePart);

    const filteredEstates = useMemo(() => {
        if (estatePart === 0) {
            return estates;
        }
        return estates.filter((e) => e.estatePart === estatePart);
    }, [estates, estatePart]);

    return { filteredEstates };
};
