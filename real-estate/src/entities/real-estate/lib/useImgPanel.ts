import { useState } from 'react';

export const useImgPanel = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const openModal = (img: string) => {
        setActiveImage(img);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setActiveImage(null);
    };

    return { isOpen, activeImage, openModal, closeModal };
};
