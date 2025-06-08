import styles from '/src/styles/Header.module.css'
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { themes } from "./styles/theme"
import { ThemeContext } from "./context/ThemeContext"


import { memo } from 'react';

const Header = memo(function Header() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentTheme = themes[theme];
    return (
        <>
        <div className={styles.header}>
            <div className={styles.container}>
            <div className={styles.logo}>
                <img src={`/logo/book-shelf_${currentTheme.color_ico}.png`} alt="Книжная полка" width={'64px'}/>
                <p>Книжная полка</p>
            </div>
            <div className={styles.search_container}>
                <input className={styles.search_input} style={currentTheme} type="text" />
            <button className={styles.search_button}><img src={`/ico/icon-search_${currentTheme.color_ico}.png`} alt="" width={'25px'}/></button>
            </div>
            
            <div className={styles.favourite_container}>
                <img src={`/ico/icon-favourites_${currentTheme.color_ico}.png`} alt="" width={'30px'}/>
                <p>3</p>
            </div>
        </div>
                <button onClick={() => navigate(`/`)} className={styles.settings_btn}>Главная</button>
        <button onClick={() => navigate(`/settings`)} className={styles.settings_btn}>Настройки  <img src={`/ico/icon-settings_${currentTheme.color_ico}.png`} alt=""  width={'20px'}/></button>
        <button  onClick={toggleTheme} className={styles.settings_btn}>Сменить тему{theme === 'light' ? '☀️' : '🌙'}</button>
        </div>

        </>
    )
})

export default Header