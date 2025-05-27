import styles from '/src/styles/BookPage.module.scss'
function BookPage(){
    return (
        <>
        
        <div className={styles.container}>
            <div>
                <img src="src/assets/covers/Cover-cat.jpg" alt="" />
                <h1>Название</h1>
                <h2>Автор</h2>
                <h3>ISBN</h3>
            </div>

            <div className={styles.description_container}>
                <h1>Название</h1>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque, enim id mollis lacinia, lorem turpis condimentum lorem, vel auctor tortor odio quis dui. Vivamus maximus metus ac orci luctus ornare pulvinar ut nisi. Ut et odio elit. Nam nec erat ac dui tempor congue. Nam a convallis arcu, a consequat nunc. Integer lorem elit, porta non ex sed, suscipit fringilla nunc. Etiam molestie ac dui id lobortis. Sed blandit faucibus facilisis. Ut non ante sodales, mollis risus sed, gravida dui. Nunc cursus mi imperdiet augue laoreet, vel egestas nisi lacinia. Nulla eu ornare tortor, quis pretium ipsum. Duis viverra vehicula tempor. Nunc sed tempor purus. Sed non bibendum lacus. Vestibulum augue risus, ultricies ac laoreet in, iaculis sagittis massa.

Aliquam erat volutpat. Suspendisse et blandit tellus. Cras vel elit quis dui iaculis eleifend. Fusce luctus aliquet velit blandit finibus. Proin eu metus at ante tempor bibendum. Sed sit amet tempor purus. Nullam in ligula erat. Etiam sollicitudin diam a congue dictum.

Nam nec velit in risus ultrices sodales. Etiam consequat nibh vel ex rutrum bibendum a id quam. Suspendisse id metus in sem posuere porta vestibulum eget risus. Mauris eget malesuada est. Integer pulvinar bibendum velit eget congue. Donec molestie est at arcu imperdiet, consequat fermentum mauris vestibulum. Aliquam rutrum, ligula et faucibus posuere, eros urna fermentum libero, quis sodales magna quam nec magna. Donec id nulla id urna dignissim interdum. Morbi facilisis tellus lacus, ultricies accumsan est porta ut. Nam ultricies velit lectus, non placerat enim suscipit eu. Proin ultricies convallis neque, at tempus purus rhoncus sed.
                </p>

                <button className='button_general'>В избранное<img src="src/assets/ico/icon-favourites_black.png" alt="" width={'30px'}/></button>
                <button className='button_general'>Читать</button>
            </div>
        <button className={['button_general', styles.back_btn].join(' ')}>Назад</button>
        </div>
        </>
    )
}

export default BookPage