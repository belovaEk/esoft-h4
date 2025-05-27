import styles from '/src/styles/BookCard.module.scss'

function BookCard(){
    return(
        <>
        <div className={styles.bookCard}>
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
                <img src="src/assets/ico/icon-favourites_black.png" alt="" width={'30px'}/>
                </button>
        </div>
        </>
    )
}

export default BookCard