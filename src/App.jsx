import './App.css'
import SearchInput from "./components/SearchInput";
import {useEffect, useState} from "react";
import ThemeButton from "./components/ThemeButton";

export default function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Initial theme

    const toggleTheme = () => {
        // Toggle between 'light' and 'dark' themes
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        // Set theme-specific styles based on the current theme
        if (theme === 'light') {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
        localStorage.setItem('theme', theme);

        // Cleanup function to reset styles when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [theme]);

    return (<div>
            <SearchInput
                theme={theme}
            />
            <ThemeButton
                theme={theme}
                toggleTheme={toggleTheme}
            />
        </div>);
}
