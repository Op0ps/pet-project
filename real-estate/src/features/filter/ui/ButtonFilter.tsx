import type { ButtonFilterProps } from '../types';
import { useButtonFilter } from '../lib/useButtonFilter';

export const ButtonFilter = ({
    estatePart,
    label,
    className,
    disabled,
}: ButtonFilterProps) => {
    const { handlerEstatePatr } = useButtonFilter();

    return (
        <button
            disabled={disabled}
            onClick={() => handlerEstatePatr(estatePart)}
            type="button"
            className={className}
        >
            {label}
        </button>
    );
};
