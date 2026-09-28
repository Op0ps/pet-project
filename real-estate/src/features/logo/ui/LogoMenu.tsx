import { Link } from 'react-router';

import { useLogoMenu } from '../lib/useLogoMenu';

export const LogoMenu = () => {
    const { handlerEstatePatr, headerText } = useLogoMenu();

    return (
        <div>
            <Link
                to="/"
                onClick={() => handlerEstatePatr()}
                className="flex lg:flex-1 gap-1 p-1 bg-gray-500 hover:bg-gray-400 rounded-md shadow-md shadow-gray-400"
            >
                <span className="text-amber-600 font-bold">VIP</span>
                <span className="text-white">{headerText}</span>
            </Link>
        </div>
    );
};
