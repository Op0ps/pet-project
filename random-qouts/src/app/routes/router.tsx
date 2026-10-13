import { createBrowserRouter } from 'react-router';
import { Home, Details, QuoteEditor } from '../../pages/index';
import { Layout } from '../../shared/ui';
import { loaderHome } from './home';

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
            },
            {
                path: 'quote-editor',
                Component: QuoteEditor,
            },
        ],
    },
]);
