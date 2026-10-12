import logoImg from './R.webp';

export function Header() {
    return (
        <header className="flex justify-around items-center h-16 bg-amber-200">
            <a href="/" className="flex items-baseline text-2xl">
                <img className="w-8" src={logoImg} alt="logo" />
                <span>andom - quote</span>
            </a>

            <nav className="flex gap-4 items-center">
                <a href="/quote-editor" className="bg-amber-300 p-3 rounded-lg">
                    Edit
                </a>
            </nav>
        </header>
    );
}
