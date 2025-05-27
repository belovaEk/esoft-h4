import BookCard from './BookCard'
import styles from '/src/styles/BookList.module.scss'

function BookList(){

    return(
        <>
        <div className={styles.container}>
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
        </>
    )

}

export default BookList