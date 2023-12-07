import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faTimes} from "@fortawesome/free-solid-svg-icons";
import SearchSuggestions from "./SearchSuggestions.jsx";
import {debounce} from "lodash";

export default function SearchInput({theme}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const inputRef = useRef();

    // Create a separate debounce function for filtering suggestions
    const debouncedFilterSuggestions = debounce((term) => {
        const filtered = suggestions.filter((city) => city.name.toLowerCase().startsWith(term.toLowerCase()));
        setFilteredSuggestions(filtered);
    }, 300);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/cities");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setSuggestions(data);

                // After fetching cities, debounce the filtering of suggestions
                debouncedFilterSuggestions(searchTerm);
            } catch (error) {
                console.error("Error fetching cities:", error.message);
            }
        };
        // Fetch cities on component mount
        fetchCities();
    }, [searchTerm]); // Re-run effect when searchTerm changes

    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        debouncedFilterSuggestions(term);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (city) => {
        // Handle suggestion click, e.g., update state or perform some action
        console.log("Selected City:", city);
        setShowSuggestions(false);
        setSearchTerm('');
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Close suggestions if the click is outside of the search input
            if (!inputRef.current.contains(event.target)) {
                console.log(inputRef)
                setShowSuggestions(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleInputClose = () => {
        setSearchTerm('');
    };

    const styles = {
        backgroundColor: theme === 'light' ? 'lightgray' : '#242424',
        color: theme === 'light' ? '#242424' : 'lightgray',
    }

    return (<>
        <header style={styles}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingGlass"/>
            <input
                ref={inputRef}
                type="text"
                className="searchInput"
                placeholder="Search city"
                value={searchTerm}
                onChange={handleInputChange}
                style={styles}
            />
            <FontAwesomeIcon
                icon={faTimes}
                className="xMark"
                onClick={handleInputClose}
            />
            <div>
                <button type="submit" className="searchButton">
                    Search
                </button>
            </div>
            {showSuggestions && searchTerm && (
                <SearchSuggestions
                    suggestions={filteredSuggestions}
                    inputTerm={searchTerm}
                    onItemClick={handleSuggestionClick}
                    theme={theme}
                />
            )}
        </header>
    </>);
}