import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton({toggleTheme, theme, enableTransition}) {
    return (
        <button
            className='themeButton'
            onClick={toggleTheme}
        >
            {theme === 'light' ? <FontAwesomeIcon icon={faSun} style={{color: 'black'}}/> :
                <FontAwesomeIcon icon={faMoon} style={{color: 'white'}}/>}
        </button>
    )
}