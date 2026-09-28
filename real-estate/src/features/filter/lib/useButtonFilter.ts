import { useDispatch } from 'react-redux';
import { setEstatePart } from '../../../entities/real-estate';

export const useButtonFilter = () => {
    const dispatch = useDispatch();

    const handlerEstatePatr = (estatePatr: number) => {
        dispatch(setEstatePart(estatePatr));
    };

    return { handlerEstatePatr };
};
