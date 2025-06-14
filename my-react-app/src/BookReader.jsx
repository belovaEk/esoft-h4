import styles from '/src/styles/BookReader.module.scss'
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themes } from "./styles/theme";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import booksData from '/src/data/books.json'

import { useTextStyles } from './context/TextSettingsContext';


function BookReader(){
    const { theme } = useContext(ThemeContext);
    const currentTheme = themes[theme];

    const textStyles  = useTextStyles();

    const {id} = useParams();
    const [book, setBook] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
            const foundBook = booksData.find(b => b.id === parseInt(id));
            if (!foundBook) {
            navigate('/not-found'); 
            return;
            }
            setBook(foundBook);
        }, [id, navigate]);
    
        if (!book) return <div style={{ position: 'fixed',
    width: '100%',
    height: '100%',
    background: currentTheme.background,
    color: currentTheme.color,
    textAlign: 'center',
    padding: '15%',fontSize: '50px'}}>Загрузка...</div>;
    

    return (
        <>
        <div className={styles.container} style={{background: currentTheme.background_reader}}>
            <h1>{book.title}</h1>
            <div className={styles.text_container}>
            <p style={textStyles}>{book.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus tristique sapien, vel auctor purus sollicitudin eu. Curabitur volutpat laoreet ipsum id pulvinar. Morbi efficitur lacus consectetur nisi lacinia maximus. Proin eu hendrerit mauris. Vivamus varius mauris magna, eu pretium orci rhoncus in. Integer in sapien enim. Phasellus sed commodo sapien, at ultricies lectus.

Ut ac leo risus. Phasellus in tristique ligula. Duis et elit aliquam, maximus augue nec, congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio ante, maximus eu mollis ut, aliquet non urna. Aenean in sollicitudin augue. Nam sit amet iaculis enim. Pellentesque rutrum feugiat consectetur. Praesent vitae eros quis velit interdum pellentesque. Etiam sollicitudin neque eu ornare convallis. Donec magna nulla, lacinia in blandit sit amet, lobortis quis enim.

Etiam commodo tempor lorem, in ultrices tellus. In tempor, magna vitae interdum feugiat, quam velit dapibus ipsum, a pellentesque eros odio quis ante. Suspendisse lacinia est malesuada, consectetur turpis eu, porta mauris. Vestibulum ut consectetur tellus, ut mollis erat. Integer nunc ex, viverra sit amet vestibulum nec, pretium et erat. Suspendisse tincidunt risus eu erat vulputate consequat. Pellentesque vestibulum egestas ante et porta. Aenean lacus nisl, hendrerit nec massa vitae, facilisis faucibus risus. Duis vitae aliquam eros, at vulputate mauris. Curabitur sed ipsum gravida, porttitor mauris at, pulvinar ante. Suspendisse sed bibendum felis, non pharetra risus. Integer congue tellus sed diam mollis mattis. Duis sed orci ut ante tristique pulvinar.

Nunc ultrices velit id euismod congue. Sed faucibus, justo quis iaculis tristique, augue tortor vehicula neque, quis accumsan ipsum odio ac lacus. Pellentesque efficitur neque a elit mollis, a gravida arcu pellentesque. Mauris pulvinar erat eu convallis luctus. Praesent congue, magna nec blandit fermentum, mi tortor vehicula lectus, ut maximus metus tellus quis justo. Integer viverra neque pulvinar nunc fringilla pellentesque. Phasellus sagittis finibus urna eget condimentum. Duis scelerisque sapien non justo sollicitudin bibendum. Nullam quis luctus nunc. Quisque vel condimentum lacus. Vestibulum tempus aliquet euismod. Sed auctor eu turpis at cursus. Suspendisse sed nulla sed dolor elementum pulvinar vitae in velit. Integer tincidunt dolor vel eros congue laoreet.

Maecenas fermentum ligula et nibh congue, in vulputate sem euismod. Mauris id scelerisque dolor. Nulla eget lectus quam. Morbi tempor convallis nibh, a consectetur risus sodales quis. Donec lectus eros, convallis nec placerat efficitur, egestas vitae ante. Maecenas accumsan enim a tincidunt tincidunt. Phasellus et egestas lectus. Duis quis sollicitudin massa, vitae elementum est. Quisque vel dolor et sapien finibus tincidunt. Aliquam vel hendrerit lectus, quis finibus enim. Nunc tincidunt ligula odio, in sagittis lacus auctor ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus tristique sapien, vel auctor purus sollicitudin eu. Curabitur volutpat laoreet ipsum id pulvinar. Morbi efficitur lacus consectetur nisi lacinia maximus. Proin eu hendrerit mauris. Vivamus varius mauris magna, eu pretium orci rhoncus in. Integer in sapien enim. Phasellus sed commodo sapien, at ultricies lectus.

Ut ac leo risus. Phasellus in tristique ligula. Duis et elit aliquam, maximus augue nec, congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio ante, maximus eu mollis ut, aliquet non urna. Aenean in sollicitudin augue. Nam sit amet iaculis enim. Pellentesque rutrum feugiat consectetur. Praesent vitae eros quis velit interdum pellentesque. Etiam sollicitudin neque eu ornare convallis. Donec magna nulla, lacinia in blandit sit amet, lobortis quis enim.

Etiam commodo tempor lorem, in ultrices tellus. In tempor, magna vitae interdum feugiat, quam velit dapibus ipsum, a pellentesque eros odio quis ante. Suspendisse lacinia est malesuada, consectetur turpis eu, porta mauris. Vestibulum ut consectetur tellus, ut mollis erat. Integer nunc ex, viverra sit amet vestibulum nec, pretium et erat. Suspendisse tincidunt risus eu erat vulputate consequat. Pellentesque vestibulum egestas ante et porta. Aenean lacus nisl, hendrerit nec massa vitae, facilisis faucibus risus. Duis vitae aliquam eros, at vulputate mauris. Curabitur sed ipsum gravida, porttitor mauris at, pulvinar ante. Suspendisse sed bibendum felis, non pharetra risus. Integer congue tellus sed diam mollis mattis. Duis sed orci ut ante tristique pulvinar.

Nunc ultrices velit id euismod congue. Sed faucibus, justo quis iaculis tristique, augue tortor vehicula neque, quis accumsan ipsum odio ac lacus. Pellentesque efficitur neque a elit mollis, a gravida arcu pellentesque. Mauris pulvinar erat eu convallis luctus. Praesent congue, magna nec blandit fermentum, mi tortor vehicula lectus, ut maximus metus tellus quis justo. Integer viverra neque pulvinar nunc fringilla pellentesque. Phasellus sagittis finibus urna eget condimentum. Duis scelerisque sapien non justo sollicitudin bibendum. Nullam quis luctus nunc. Quisque vel condimentum lacus. Vestibulum tempus aliquet euismod. Sed auctor eu turpis at cursus. Suspendisse sed nulla sed dolor elementum pulvinar vitae in velit. Integer tincidunt dolor vel eros congue laoreet.

Maecenas fermentum ligula et nibh congue, in vulputate sem euismod. Mauris id scelerisque dolor. Nulla eget lectus quam. Morbi tempor convallis nibh, a consectetur risus sodales quis. Donec lectus eros, convallis nec placerat efficitur, egestas vitae ante. Maecenas accumsan enim a tincidunt tincidunt. Phasellus et egestas lectus. Duis quis sollicitudin massa, vitae elementum est. Quisque vel dolor et sapien finibus tincidunt. Aliquam vel hendrerit lectus, quis finibus enim. Nunc tincidunt ligula odio, in sagittis lacus auctor ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus tristique sapien, vel auctor purus sollicitudin eu. Curabitur volutpat laoreet ipsum id pulvinar. Morbi efficitur lacus consectetur nisi lacinia maximus. Proin eu hendrerit mauris. Vivamus varius mauris magna, eu pretium orci rhoncus in. Integer in sapien enim. Phasellus sed commodo sapien, at ultricies lectus.

Ut ac leo risus. Phasellus in tristique ligula. Duis et elit aliquam, maximus augue nec, congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio ante, maximus eu mollis ut, aliquet non urna. Aenean in sollicitudin augue. Nam sit amet iaculis enim. Pellentesque rutrum feugiat consectetur. Praesent vitae eros quis velit interdum pellentesque. Etiam sollicitudin neque eu ornare convallis. Donec magna nulla, lacinia in blandit sit amet, lobortis quis enim.

Etiam commodo tempor lorem, in ultrices tellus. In tempor, magna vitae interdum feugiat, quam velit dapibus ipsum, a pellentesque eros odio quis ante. Suspendisse lacinia est malesuada, consectetur turpis eu, porta mauris. Vestibulum ut consectetur tellus, ut mollis erat. Integer nunc ex, viverra sit amet vestibulum nec, pretium et erat. Suspendisse tincidunt risus eu erat vulputate consequat. Pellentesque vestibulum egestas ante et porta. Aenean lacus nisl, hendrerit nec massa vitae, facilisis faucibus risus. Duis vitae aliquam eros, at vulputate mauris. Curabitur sed ipsum gravida, porttitor mauris at, pulvinar ante. Suspendisse sed bibendum felis, non pharetra risus. Integer congue tellus sed diam mollis mattis. Duis sed orci ut ante tristique pulvinar.

Nunc ultrices velit id euismod congue. Sed faucibus, justo quis iaculis tristique, augue tortor vehicula neque, quis accumsan ipsum odio ac lacus. Pellentesque efficitur neque a elit mollis, a gravida arcu pellentesque. Mauris pulvinar erat eu convallis luctus. Praesent congue, magna nec blandit fermentum, mi tortor vehicula lectus, ut maximus metus tellus quis justo. Integer viverra neque pulvinar nunc fringilla pellentesque. Phasellus sagittis finibus urna eget condimentum. Duis scelerisque sapien non justo sollicitudin bibendum. Nullam quis luctus nunc. Quisque vel condimentum lacus. Vestibulum tempus aliquet euismod. Sed auctor eu turpis at cursus. Suspendisse sed nulla sed dolor elementum pulvinar vitae in velit. Integer tincidunt dolor vel eros congue laoreet.

Maecenas fermentum ligula et nibh congue, in vulputate sem euismod. Mauris id scelerisque dolor. Nulla eget lectus quam. Morbi tempor convallis nibh, a consectetur risus sodales quis. Donec lectus eros, convallis nec placerat efficitur, egestas vitae ante. Maecenas accumsan enim a tincidunt tincidunt. Phasellus et egestas lectus. Duis quis sollicitudin massa, vitae elementum est. Quisque vel dolor et sapien finibus tincidunt. Aliquam vel hendrerit lectus, quis finibus enim. Nunc tincidunt ligula odio, in sagittis lacus auctor ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus tristique sapien, vel auctor purus sollicitudin eu. Curabitur volutpat laoreet ipsum id pulvinar. Morbi efficitur lacus consectetur nisi lacinia maximus. Proin eu hendrerit mauris. Vivamus varius mauris magna, eu pretium orci rhoncus in. Integer in sapien enim. Phasellus sed commodo sapien, at ultricies lectus.

Ut ac leo risus. Phasellus in tristique ligula. Duis et elit aliquam, maximus augue nec, congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio ante, maximus eu mollis ut, aliquet non urna. Aenean in sollicitudin augue. Nam sit amet iaculis enim. Pellentesque rutrum feugiat consectetur. Praesent vitae eros quis velit interdum pellentesque. Etiam sollicitudin neque eu ornare convallis. Donec magna nulla, lacinia in blandit sit amet, lobortis quis enim.

Etiam commodo tempor lorem, in ultrices tellus. In tempor, magna vitae interdum feugiat, quam velit dapibus ipsum, a pellentesque eros odio quis ante. Suspendisse lacinia est malesuada, consectetur turpis eu, porta mauris. Vestibulum ut consectetur tellus, ut mollis erat. Integer nunc ex, viverra sit amet vestibulum nec, pretium et erat. Suspendisse tincidunt risus eu erat vulputate consequat. Pellentesque vestibulum egestas ante et porta. Aenean lacus nisl, hendrerit nec massa vitae, facilisis faucibus risus. Duis vitae aliquam eros, at vulputate mauris. Curabitur sed ipsum gravida, porttitor mauris at, pulvinar ante. Suspendisse sed bibendum felis, non pharetra risus. Integer congue tellus sed diam mollis mattis. Duis sed orci ut ante tristique pulvinar.

Nunc ultrices velit id euismod congue. Sed faucibus, justo quis iaculis tristique, augue tortor vehicula neque, quis accumsan ipsum odio ac lacus. Pellentesque efficitur neque a elit mollis, a gravida arcu pellentesque. Mauris pulvinar erat eu convallis luctus. Praesent congue, magna nec blandit fermentum, mi tortor vehicula lectus, ut maximus metus tellus quis justo. Integer viverra neque pulvinar nunc fringilla pellentesque. Phasellus sagittis finibus urna eget condimentum. Duis scelerisque sapien non justo sollicitudin bibendum. Nullam quis luctus nunc. Quisque vel condimentum lacus. Vestibulum tempus aliquet euismod. Sed auctor eu turpis at cursus. Suspendisse sed nulla sed dolor elementum pulvinar vitae in velit. Integer tincidunt dolor vel eros congue laoreet.

Maecenas fermentum ligula et nibh congue, in vulputate sem euismod. Mauris id scelerisque dolor. Nulla eget lectus quam. Morbi tempor convallis nibh, a consectetur risus sodales quis. Donec lectus eros, convallis nec placerat efficitur, egestas vitae ante. Maecenas accumsan enim a tincidunt tincidunt. Phasellus et egestas lectus. Duis quis sollicitudin massa, vitae elementum est. Quisque vel dolor et sapien finibus tincidunt. Aliquam vel hendrerit lectus, quis finibus enim. Nunc tincidunt ligula odio, in sagittis lacus auctor ut.</p>
            </div>
        </div>
        </>
    )
}

export default BookReader