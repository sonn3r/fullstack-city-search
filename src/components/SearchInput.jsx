import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

export default function SearchInput() {
    return (
        <header>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingGlass"/>
            <input type="text" className="searchInput" placeholder="Search city"/>
            <FontAwesomeIcon icon={faXmark} className="xMark"/>
            <div>
                <button type="submit" className="searchButton">Search</button>
            </div>
        </header>
    )
}