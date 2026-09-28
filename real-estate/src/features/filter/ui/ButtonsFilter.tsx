import { useButtonData } from '../lib/useButtonData';
import { ButtonFilter } from './ButtonFilter';
import type { ButtonsFilterProps } from '../types';

const ButtonsFilter = ({ className, estatePart }: ButtonsFilterProps) => {
    const buttonData = useButtonData();

    return (
        <>
            {buttonData.map((item) => {
                return (
                    <li key={item.category}>
                        <ButtonFilter
                            disabled={
                                estatePart === item.estatePart ? true : false
                            }
                            estatePart={item.estatePart}
                            label={item.label}
                            className={`${className} ${estatePart === item.estatePart ? 'bg-gray-200 text-black' : 'bg-gray-500 text-white'}`}
                        />
                    </li>
                );
            })}
        </>
    );
};

export default ButtonsFilter;
