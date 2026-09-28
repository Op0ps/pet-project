import { PATH } from '../../../../shared/lib/constants';
import type { ImgPanelProps } from './types';
import { useImgPanel } from '../../lib/useImgPanel';

export const ImgPanel = ({ images }: ImgPanelProps) => {
    const { activeImage, isOpen, closeModal, openModal } = useImgPanel();

    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 first:my-2 2xl:first:my-4">
                {images.map((image) => {
                    return (
                        <li key={image.photoId}>
                            <img
                                src={`${PATH}/more-mini/${image.photoListMiniImg}`}
                                onClick={() => openModal(image.photoListImg)}
                                alt="photo"
                                className="p-2 aspect-square w-full object-cover h-52 md:aspect-auto rounded-md shadow-md shadow-gray-400 hover:shadow-gray-600 bg-gray-500"
                            />
                        </li>
                    );
                })}
            </ul>

            {isOpen && activeImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/80"
                    onClick={closeModal}
                >
                    <div className="relative max-w-[90vw] max-h-[90vh]">
                        <img
                            src={`${PATH}/more/${activeImage}`}
                            alt="full"
                            className="max-w-full max-h-full object-contain rounded-md"
                        />
                    </div>
                </div>
            )}
        </>
    );
};
