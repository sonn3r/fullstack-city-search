import './App.css'
import SearchInput from "./components/SearchInput";
import {useEffect, useState} from "react";
import ThemeButton from "./components/ThemeButton";


/*
Реализовать поиск, который включает себя UI элемент (см. скриншот) в виде инпута и списка suggestions
(кнопку Browse можно проигнорировать) и эндпоинт, который присылает suggestions по мере ввода символов
в строку поиска (применения debounce на клиенте будет плюсом). На основе файла cities.csv создать таблицу в БД,
по которой и будет осуществляться поиск, а также сопутствующую backend логику.

Опционально: Реализовать полнотекстовый поиск средствами Postgresql

1) Completed: Сделать SearchInput
2) Completed: Сделать SearchSuggestions
3) Completed: Сделать Endpoint, который присылает suggestions по мере ввода символов в строку поиска
4) Completed: Использовать debounce
5) Completed: Создать таблицу в БД на основе файла cities.csv
6) Completed: Создать backend логику
7) TODO: Оптионально: Реализовать полнотекстовый поиск средствами Postgresql
*/

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

    return (
        <div>
            <SearchInput
                theme={theme}
            />
            <ThemeButton
                theme={theme}
                toggleTheme={toggleTheme}
            />
        </div>
    );
}
