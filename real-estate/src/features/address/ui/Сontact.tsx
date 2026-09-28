import type { СontactProps } from '../types';

export const Сontact = ({ href, label, icon }: СontactProps) => {
    return (
        <li className="flex items-center justify-start p-2">
            {icon}
            <a href={href} target="_blank" className="block">
                {label}
            </a>
        </li>
    );
};
