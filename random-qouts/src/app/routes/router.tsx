import { createBrowserRouter } from 'react-router';
import { Home, Details } from '../../pages/index';
import { Layout } from '../../shared/ui';
import { loaderHome } from './home';
import { loaderDetails } from './details';

export default createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
                loader: loaderHome,
            },
            {
                path: 'details/:id',
                Component: Details,
                loader: loaderDetails,
            },
        ],
    },
]);
