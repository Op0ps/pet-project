import { FaSpinner } from 'react-icons/fa';

export const AnimateSpinner = () => {
    return (
        <main className="grow flex items-center justify-center">
            <FaSpinner size={30} className="animate-spin text-white" />
        </main>
    );
};
