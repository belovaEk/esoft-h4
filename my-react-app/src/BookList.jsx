import BookCard from './BookCard'
import styles from '/src/styles/BookList.module.scss'
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themes } from "./styles/theme";



import { useAppContext } from './context/AppContext';


function BookList() {
    const { theme } = useContext(ThemeContext);
    const { books, searchQuery, filters, favorites } = useAppContext();
    const currentTheme = themes[theme];
    
    // Функция фильтрации книг
    const filteredBooks = books.filter(book => {
        // Фильтрация по поисковому запросу
        const matchesSearch = searchQuery === '' || 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            book.author.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Фильтрация по авторам (если выбраны)
        const matchesAuthors = filters.authors.length === 0 || 
            filters.authors.includes(book.author);
        
        // Фильтрация по избранному (если включено)
        const matchesFavorites = !filters.onlyFavorites || 
            favorites.includes(book.id);
        
        return matchesSearch && matchesAuthors && matchesFavorites;
    });

    return (
        <div className={styles.container} style={{...currentTheme}}>
            {filteredBooks.length === 0 ? (
                <div className={styles.no_results}>
                    <p>Книги не найдены. Попробуйте изменить параметры поиска.</p>
                </div>
            ) : (
                <div className={styles.grid_table}>
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book}/>
                    ))}
                </div>
            )}
        </div>
    );
}
export default BookList