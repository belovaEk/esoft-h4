import BookCard from './BookCard'
import styles from '/src/styles/BookList.module.scss'
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themes } from "./styles/theme";


function BookList(){
    const { theme } = useContext(ThemeContext);
    const currentTheme = themes[theme];
    return(
        <div className={styles.container} style={{...currentTheme}}>
            <div className={styles.grid_table}>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                 <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/> <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
        </div>
    )

}

export default BookList