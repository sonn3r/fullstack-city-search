import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faTimes} from "@fortawesome/free-solid-svg-icons";
import SearchSuggestions from "./SearchSuggestions.jsx";

export default function SearchInput() {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/cities");
                const data = await response.json();
                console.log("Cities data:", data); // Log the data
                setSuggestions(data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, [])

    useEffect(() => {
        // Filter suggestions based on the input value
        const filtered = suggestions.filter(city =>
            city.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSuggestions(filtered);
    }, [searchTerm, suggestions]);

    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
    };

    const handleSuggestionClick = (city) => {
        // Handle suggestion click, e.g., update state or perform some action
        console.log("Selected City:", city);
    };

    return (
        <>
            <header>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingGlass"/>
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search city"
                    value={searchTerm}
                    onChange={handleInputChange}
                />

                <FontAwesomeIcon
                    icon={faTimes}
                    className="xMark"
                />
                <div>
                    <button type="submit" className="searchButton">
                        Search
                    </button>
                </div>
                {searchTerm && (
                    <SearchSuggestions
                        suggestions={filteredSuggestions}
                        inputTerm={searchTerm}
                        onItemClick={handleSuggestionClick}
                    />
                )}
            </header>

        </>
    );
}