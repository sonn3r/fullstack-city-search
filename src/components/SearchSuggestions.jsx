import {useState} from "react";

const SearchSuggestions = ({suggestions, inputTerm, onItemClick, theme}) => {
    const baseStyles = {
        backgroundColor: theme === 'light' ? 'lightgray' : '#242424',
        color: theme === 'light' ? '#242424' : 'lightgray',
    };

    const hoverStyles = {
        backgroundColor: theme === 'light' ? '#c0c0c0' : '#464646', color: theme === 'light' ? 'black' : 'white',
    };
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className="searchSuggestions"
            style={{borderTop: theme === 'light' ? '1px solid #c0c0c0' : '1px solid #464646'}}
        >
            {suggestions.slice(0, 10).map((city, index) => {
                const name = city.name;
                const matchIndex = name.toLowerCase().indexOf(inputTerm.toLowerCase());
                if (matchIndex !== -1) {
                    const match = name.slice(matchIndex, matchIndex + inputTerm.length);
                    const afterMatch = name.slice(matchIndex + inputTerm.length);

                    return (
                        <div
                            key={city.id}
                            className="suggestionItem"
                            onClick={() => onItemClick(city)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={index === hoveredIndex ? {...baseStyles, ...hoverStyles} : baseStyles}
                        >
                    <span className='match' style={{color: theme === 'light' ? '#242424' : 'white', fontWeight: '400'}}>
                        {match}
                    </span>
                            <span className='afterMatch' style={{opacity: '0.6'}}>
                        {afterMatch}
                    </span>
                        </div>);
                } else {
                    return (
                        <div
                            key={city.id}
                            className="suggestionItem"
                            onClick={() => onItemClick(city)}>
                            {name}
                        </div>);
                }
            })}
        </div>);
};

export default SearchSuggestions;
