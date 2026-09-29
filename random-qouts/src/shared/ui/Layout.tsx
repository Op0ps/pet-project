import { Outlet } from 'react-router';

export function Layout() {
    return (
        <div>
            <header>
                <div>
                    <img src="" alt="logo" />
                    <p>Logo</p>
                </div>
            </header>

            <Outlet />

            <footer>information current site</footer>
        </div>
    );
}
