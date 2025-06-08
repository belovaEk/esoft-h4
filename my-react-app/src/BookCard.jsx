import styles from '/src/styles/BookCard.module.scss'
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themes } from "./styles/theme";
import { useNavigate } from 'react-router-dom';

import { useAppContext } from './context/AppContext';

function BookCard({book}){
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const currentTheme = themes[theme];

    const { favorites, toggleFavorite } = useAppContext();
    const isFavorite = favorites.includes(book?.id);


    return(
        <div className={styles.bookCard} style={{...currentTheme, background: currentTheme.background_card}}>
            <div className={styles.container}  onClick={() => navigate(`/book/${book.id}`)}>
                    <div className={styles.cover}>
                        {/*  как сделать дефолтную обложку? */}
                        <img src={book?.cover || "/covers/book.png"} alt={book?.title || 'обложка'}  width={'170px'}/>
                    </div>
                    <h1>{book?.title}</h1>
                    <div>
                        <h2>{book?.author || 'Автор'},</h2>
                        <h3>{book?.year || 'год'}</h3>
                    </div>
            </div>
            <button onClick={() => toggleFavorite(book.id)}>
                <img src={isFavorite ? `/ico/icon-favourites_active.png` : `/ico/icon-favourites_${currentTheme.color_ico}.png`} alt="" width={'30px'}/>
                </button>
        </div>
    )
}

export default BookCard