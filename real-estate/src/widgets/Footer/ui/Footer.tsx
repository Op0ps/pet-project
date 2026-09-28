import { Link } from 'react-router';
import { Address, ButtonLanguage } from '../../../features/index';

export const Footer = () => {
    return (
        <footer className="flex flex-col p-3 items-center rounded-t-md">
            <Address />

            <div className="h-px my-4 bg-gray-400 w-full" />
            <ButtonLanguage />

            <div className="h-px my-4 bg-gray-400 w-full" />
            <div className="p-2 font-extralight">
                <Link to="https://github.com/Op0ps" target="_blank">
                    © other.org, 2020 - 2030. Development __00ps__
                </Link>
            </div>
        </footer>
    );
};
