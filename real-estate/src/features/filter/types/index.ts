import type { ReactNode } from 'react';

export type FilterMobileProps = {
    children: ReactNode;
    cb: (isShow: boolean) => void;
};
export interface ButtonOpenCloseMenuMobileProps {
    isShow: boolean;
    cb: () => void;
}
export type ButtonFilterProps = {
    label: string;
    disabled?: boolean;
    estatePart: number;
    className: string;
};

export type ButtonsFilterProps = {
    className: string;
    estatePart: number;
};
