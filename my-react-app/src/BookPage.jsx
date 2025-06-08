import styles from '/src/styles/BookPage.module.scss'

import { useParams, useNavigate } from 'react-router-dom';

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themes } from "./styles/theme";

import booksData from '/src/data/books.json'


function BookPage(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);

    const { theme } = useContext(ThemeContext);
    const currentTheme = themes[theme];


    useEffect(() => {
        const foundBook = booksData.find(b => b.id === parseInt(id));
        if (!foundBook) {
        navigate('/not-found'); 
        return;
        }
        setBook(foundBook);
    }, [id, navigate]);

    if (!book) return <div>Загрузка...</div>;


    return (
        <>
        
        <div className={styles.container} style={{...currentTheme}}>
            <div>
                <img src={book.cover || "/covers/book.png"} alt={book.totle} style={{maxHeight: '600px', minHeight: '550px'}}/>
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <h3>ISBN</h3>
            </div>

            <div className={styles.description_container}>
                <h1>{book.title}</h1>
                
                <p>{book.description}
                </p>

                <button className='button_general' style={{border: currentTheme.border}}>В избранное</button>
                <button onClick={() => navigate(`/reader/${book.id}`)} className='button_general'style={{border: currentTheme.border}}>Читать</button>
            </div>
        <button onClick={() => navigate(`/`)} className={['button_general', styles.back_btn ].join(' ')} style={{border: currentTheme.border}}>Назад</button>
        </div>
        </>
    )
}

export default BookPage