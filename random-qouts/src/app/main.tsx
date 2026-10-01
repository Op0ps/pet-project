import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { Provider } from 'react-redux';
import store from './store/store';
import router from './routes/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store} children={<RouterProvider router={router} />} />
    </StrictMode>,
);
