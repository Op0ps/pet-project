import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';

import { store } from './shared/index.ts';
import { route } from './app/routes/index.ts';
import './app/css/style.css';

const roote = document.getElementById('root');

createRoot(roote!).render(
    <Provider store={store}>
        <RouterProvider router={route} />
    </Provider>,
);
