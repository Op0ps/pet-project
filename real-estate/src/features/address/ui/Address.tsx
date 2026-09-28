import { getAddress } from '../lib/getAddress';
import { Сontact } from './Сontact';

export const Address = () => {
    const phones = getAddress();

    return (
        <address>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-between p-2">
                {phones.length > 0 &&
                    phones.map((item) => (
                        <Сontact
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
            </ul>
        </address>
    );
};
