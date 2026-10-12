export function Search() {
    return (
        <div className="text-center my-2">
            <label htmlFor="qsearch">Поиск цитаты: </label>

            <input
                className="p-2 rounded-md bg-amber-200"
                id="qsearch"
                type="text"
            />
        </div>
    );
}
