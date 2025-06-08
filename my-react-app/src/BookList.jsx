import BookCard from './BookCard'
import styles from '/src/styles/BookList.module.scss'
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themes } from "./styles/theme";


import booksData from '/src/data/books.json'


function BookList(){
    const { theme } = useContext(ThemeContext);
    const currentTheme = themes[theme];
    return(
        <div className={styles.container} style={{...currentTheme}}>
            <div className={styles.grid_table}>
                {booksData.map((book) => (
                    <BookCard key={book.id}
                                book ={book}/>
                ))}
                
                
            </div>
        </div>
    )

}

export default BookList