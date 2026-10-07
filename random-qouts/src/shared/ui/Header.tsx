import logoImg from './R.webp';

export function Header() {
    return (
        <header className="flex justify-around py-2 bg-amber-200">
            <div className="flex my-2">
                <img className="w-8" src={logoImg} alt="logo" />
                <p className="text-2xl">andom - quote</p>
            </div>

            <nav className="flex gap-4 items-center">
                <div className="bg-amber-300 p-2 rounded-lg">button1</div>
                <div className="bg-amber-300 p-2 rounded-lg">button2</div>
                <div className="bg-amber-300 p-2 rounded-lg">button3</div>
            </nav>
        </header>
    );
}
