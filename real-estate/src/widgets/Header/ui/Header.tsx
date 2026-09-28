import { LogoMenu } from '../../../features';
import { useParams } from 'react-router';
import { Filter } from './Filter';
import { BackButton } from './BackButton';

export const Header = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <header className="sticky top-0 justify-between shadow-md shadow-gray-400 rounded-b-md">
            <nav className="flex mx-auto items-center justify-between p-6 lg:px-8">
                {/* Лого */}
                <LogoMenu />

                {/* Фильтр */}
                {id ? <BackButton /> : <Filter />}
            </nav>
        </header>
    );
};
