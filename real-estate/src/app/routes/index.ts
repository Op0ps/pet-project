import { createBrowserRouter } from 'react-router';

import { RealEstates, Layout, RealEstate } from '../../pages';
import { getLanguageSystem } from '../../shared/index';

export const route = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        loader: getLanguageSystem,
        children: [
            { index: true, Component: RealEstates },
            { path: '/estate/:id', Component: RealEstate },
        ],
    },
]);
