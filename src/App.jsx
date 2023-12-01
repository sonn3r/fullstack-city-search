import './App.css'
import SearchInput from "./components/SearchInput";
import SearchSuggestions from "./components/SearchSuggestions";
import {useState} from "react";

/*
Реализовать поиск, который включает себя UI элемент (см. скриншот) в виде инпута и списка suggestions
(кнопку Browse можно проигнорировать) и эндпоинт, который присылает suggestions по мере ввода символов
в строку поиска (применения debounce на клиенте будет плюсом). На основе файла cities.csv создать таблицу в БД,
по которой и будет осуществляться поиск, а также сопутствующую backend логику.

Опционально: Реализовать полнотекстовый поиск средствами Postgresql

1) Completed: Сделать SearchInput
2) Completed: Сделать SearchSuggestions
3) TODO: Сделать Endpoint, который присылает suggestions по мере ввода символов в строку поиска
4) TODO: Использовать debounce
5) Completed: Создать таблицу в БД на основе файла cities.csv
6) Completed: Создать backend логику
7) TODO: Оптионально: Реализовать полнотекстовый поиск средствами Postgresql

*/
function App() {

    return (
        <>
            <SearchInput/>
        </>
    )
}

export default App
