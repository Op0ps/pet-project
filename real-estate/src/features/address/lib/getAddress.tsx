import type { СontactProps } from '../types';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook } from 'react-icons/fa';

export const getAddress = (): СontactProps[] => {
    return [
        {
            href: 'tel:+38 000-00-00',
            label: '+38 000-00-00',
            icon: <FaPhone className="mx-1" />,
        },
        {
            href: 'tel:+38 000-00-01',
            label: '+38 000-00-00',
            icon: <FaPhone className="mx-1" />,
        },
        {
            href: 'othermail@gmail.com',
            label: 'othermail@gmail.com',
            icon: <FaEnvelope className="mx-1" />,
        },
        {
            href: 'https://www.instagram.com/',
            label: 'Instagram',
            icon: <FaInstagram className="mx-1" />,
        },
        {
            href: 'https://www.facebook.com/',
            label: 'facebook',
            icon: <FaFacebook className="mx-1" />,
        },
    ];
};
