import { Link } from 'react-router';

export function Footer() {
    return (
        <footer className="flex justify-center py-4 gap-4 bg-amber-600">
            <div>
                <Link to={{ pathname: 'tel:+380 66 000 00 00' }}>
                    +380 66 000 00 00
                </Link>
            </div>

            <div>
                <Link to={{ pathname: 'tel:+380 66 000 00 00' }}>
                    +380 66 000 00 00
                </Link>
            </div>

            <div>
                <Link to={{ pathname: 'tel:+380 66 000 00 00' }}>
                    +380 66 000 00 00
                </Link>
            </div>
        </footer>
    );
}
