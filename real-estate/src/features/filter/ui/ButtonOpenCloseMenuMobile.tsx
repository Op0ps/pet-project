import { FaBars, FaTimes } from 'react-icons/fa';
import type { ButtonOpenCloseMenuMobileProps } from '../types';

export const ButtonOpenCloseMenuMobile = ({
    cb,
    isShow,
}: ButtonOpenCloseMenuMobileProps) => {
    return (
        <button type="button" onClick={cb} className="p-2 border rounded-md">
            {isShow ? <FaTimes /> : <FaBars />}
        </button>
    );
};
