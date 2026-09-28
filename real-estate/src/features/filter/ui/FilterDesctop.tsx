import { useSelector } from 'react-redux';
import ButtonsFilter from './ButtonsFilter';
import { selectEstatePart } from '../../../entities/real-estate';

export const FilterDesctop = () => {
    const estatePart = useSelector(selectEstatePart);

    return (
        <ul className="hidden lg:flex gap-2">
            <ButtonsFilter
                estatePart={estatePart}
                className="p-1 rounded-md shadow-md shadow-gray-500 hover:bg-gray-400"
            />
        </ul>
    );
};
