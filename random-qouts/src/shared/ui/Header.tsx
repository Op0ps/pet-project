import { Link } from 'react-router';
import logoImg from './R.webp';

export function Header() {
    return (
        <header className="flex justify-around items-center h-16 bg-amber-200">
            <Link
                to={{ pathname: '/' }}
                className="flex items-baseline text-2xl"
            >
                <img className="w-8" src={logoImg} alt="logo" />
                <span>andom - quote</span>
            </Link>

            <nav className="flex gap-4 items-center">
                <Link
                    to={{
                        pathname: '/quote-editor',
                    }}
                    className="bg-amber-300 p-3 rounded-lg"
                >
                    Edit
                </Link>
            </nav>
        </header>
    );
}
