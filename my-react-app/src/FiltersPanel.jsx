import styles from '/src/styles/FiltersPanel.module.scss'

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themes } from "./styles/theme";

import { useAppContext } from './context/AppContext';

// import booksData from '/src/data/books.json'

function FiltersPanel(){
     const { theme } = useContext(ThemeContext);
    const currentTheme = themes[theme];


    const {books, filters, setFilters} = useAppContext();

    const uniqueAuthors = [...new Set(books.map(book => book.author))];


    const handleOnlyFavoritesChange = (e) => {
        setFilters({
            ...filters,
            onlyFavorites: e.target.checked
        });
    };

    const handleAuthorsChange = (e) => {
        const options = e.target.options;
        const selectedAuthors = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedAuthors.push(options[i].value);
            }
        }
        setFilters({
            ...filters,
            authors: selectedAuthors
        });
    };

    const resetFilters = () => {
        setFilters({
            authors: [],
            onlyFavorites: false
        });
    };

    return(
        <>
        <div className={styles.container} style={{...currentTheme}}>
            <h1 className={styles.title}>Фильтры</h1>
            <div className={styles.filter_item}>
                <form>
                    <label for="author-select">Выберите автора</label>
                    <select name="author" id="author-select" multiple size={"6"}  style={{...currentTheme}} value={filters.authors}  onChange={handleAuthorsChange}>
                        {uniqueAuthors.map(author => 
                            <option value={author}>{author}</option>
                        )}
                    </select>
                </form>
            </div>
            <div className={[styles.filter_item, styles.favourite].join(' ')}>
                <p>Только избранные</p>
                <input type="checkbox" checked={filters.onlyFavorites} onChange={handleOnlyFavoritesChange}/>
            </div>
            <div className={[styles.filter_item,].join(' ')}>
                <button className='button_general' style={{...currentTheme}} onClick={resetFilters}>Сбросить фильтры</button>
            </div>
        </div>
        </>
    )
}

export default FiltersPanel