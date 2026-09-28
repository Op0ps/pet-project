import { useSelector } from 'react-redux';

import ButtonsFilter from './ButtonsFilter';
import { selectEstatePart } from '../../../entities/real-estate/index';
import type { FilterMobileProps } from '../types';

export const FilterMobile = ({ children, cb }: FilterMobileProps) => {
    const estatePart = useSelector(selectEstatePart);

    return (
        <div className="fixed inset-0 z-40 lg:hidden">
            <div
                className="absolute inset-0 bg-black/40"
                onClick={() => cb(false)}
            />

            <nav className="absolute inset-y-0 right-0 z-50 w-full p-6 overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-100/10 bg-gray-300">
                <div className="flex justify-between">{children}</div>
                <ul className="space-y-2 py-6">
                    <ButtonsFilter
                        estatePart={estatePart}
                        className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 font-semibold"
                    />
                </ul>
            </nav>
        </div>
    );
};
