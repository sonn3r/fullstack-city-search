const SearchSuggestions = ({suggestions, inputTerm, onItemClick}) => {
    return (
        <div className="searchSuggestions">
            {suggestions.slice(0, 10).map((city) => {
                const name = city.name;
                const matchIndex = name.toLowerCase().indexOf(inputTerm.toLowerCase());
                if (matchIndex !== -1) {
                    const beforeMatch = name.slice(0, matchIndex);
                    const match = name.slice(matchIndex, matchIndex + inputTerm.length);
                    const afterMatch = name.slice(matchIndex + inputTerm.length);

                    return (
                        <div
                            key={city.id}
                            className="suggestionItem"
                            onClick={() => onItemClick(city)}
                        >
                            {beforeMatch}
                            <span className='match'>
                                {match}
                            </span>
                            {afterMatch}
                        </div>
                    );
                } else {
                    return (
                        <div
                            key={city.id}
                            className="suggestionItem"
                            onClick={() => onItemClick(city)}
                        >
                            {name}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default SearchSuggestions;
