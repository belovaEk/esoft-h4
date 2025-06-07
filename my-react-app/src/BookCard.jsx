import styles from '/src/styles/BookCard.module.scss'
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themes } from "./styles/theme";
import { useNavigate } from 'react-router-dom';
function BookCard(){
    const navigate = useNavigate();
     const { theme } = useContext(ThemeContext);
    const currentTheme = themes[theme];
    return(
        <div className={styles.bookCard} style={{...currentTheme}}  onClick={() => navigate(`/book`)}>
            <div className={styles.container}>
                    <div className={styles.cover}>
                        <img src="src/assets/covers/book.png" alt="Обложка"  width={'170px'}/>
                    </div>
                    <h1>Название</h1>
                    <div>
                        <h2>Автор,</h2>
                        <h3>Год издания</h3>
                    </div>
            </div>
            <button>
                <img src={`src/assets/ico/icon-favourites_${currentTheme.color_ico}.png`} alt="" width={'30px'}/>
                </button>
        </div>
    )
}

export default BookCard