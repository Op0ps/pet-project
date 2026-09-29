import { createBrowserRouter } from 'react-router';
import { Home } from '../../pages/index';
import { Layout } from '../../shared/ui';

export default createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
]);
