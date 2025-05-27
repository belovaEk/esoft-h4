import styles from '/src/styles/Header.module.css'

function Header() {
    return (
        <>
        <div className={styles.header}>
            <div className={styles.container}>
            <div className={styles.logo}>
                <img src="src/assets/logo/book-shelf_black.png" alt="Книжная полка" width={'64px'}/>
                <p>Книжная полка</p>
            </div>
            <div className={styles.search_container}>
                <input className={styles.search_input} type="text" />
            <button className={styles.search_button}><img src="src/assets/ico/icon-search_black.png" alt="" width={'25px'}/></button>
            </div>
            
            <div className={styles.favourite_container}>
                <img src="src/assets/ico/icon-favourites_black.png" alt="" width={'30px'}/>
                <p>3</p>
            </div>
        </div>
        <button className={styles.settings_btn}>Настройки  <img src="src/assets/ico/icon-settings_black.png" alt=""  width={'20px'}/></button>
        <button className={[styles.settings_btn].join(' ')}>Сменить тему☀️/🌙</button>
        </div>

        </>
    )
}

export default Header