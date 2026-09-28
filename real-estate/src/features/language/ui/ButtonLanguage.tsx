import { useButtonLanguage } from '../lib/useButtonLanguage';

export const ButtonLanguage = () => {
    const { BUTTON_LANGUAGE, handlerLanguage, language } = useButtonLanguage();

    return (
        <div>
            <ul className="grid grid-cols-4 gap-2 justify-center text-center items-center">
                {BUTTON_LANGUAGE.map((item) => (
                    <li key={item.id}>
                        <button
                            type="button"
                            disabled={item.id === language}
                            onClick={() => handlerLanguage(item.id)}
                            className={`p-2 rounded-md shadow-md shadow-gray-500 hover:bg-gray-400 ${item.id === language ? 'bg-gray-200 text-black' : 'bg-gray-500 text-white'}`}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
