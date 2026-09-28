import { Outlet } from 'react-router';
import { Footer, Header } from '../../../widgets';
import { useSyncLanguage } from '../../../features/language/lib/useLanguage';

export const Layout = () => {
    useSyncLanguage();

    return (
        <div className="min-h-screen max-w-7xl flex flex-col mx-auto">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
