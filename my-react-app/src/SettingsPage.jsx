import BookCard from './BookCard'
import styles from '/src/styles/SettingsPage.module.scss'


function SettingsPage(){
    return (
        <>
            <div className={styles.container}>
                <h1>Настройки</h1>
                <div className={styles.chapters}>
                    <div className={styles.chapter}>
                        <h2>Тема:</h2>
                        <button className='button_general'>Сменить тему☀️/🌙</button>
                        <div>
                            <BookCard/>
                        </div>
                    </div>

                    <div className={styles.chapter}>
                        <h2>Управление данными:</h2>
                        <button className='button_general'>Сбросить все избранное</button>
                        <button className='button_general'>Загрузить примеры книг (для тестирования)</button>
                    </div>

                    <div className={styles.chapter}>    
                        <h2>Настройки текста:</h2>
                        <div>
                            <h3>Цвет текста:</h3>
                                <label for="color_black">Черный</label>
                                <input type="radio" name="font_color" id="color_black" />
                                <label for="color_darkblue">Темно-синий</label>
                                <input type="radio" name="font_color" id="color_darkblue" />
                                <label for="color_sepia">Сепия</label>
                                <input type="radio" name="font_color" id="color_sepia" />
                        </div>

                        <div>
                            <h3>Размер шрифта:</h3>
                            <label for="small">Мелкий</label>
                            <input type="radio" name="font_size" id="small" />
                            <label for="medium">Средний</label>
                            <input type="radio" name="font_size" id="medium" />
                            <label for="large">Большой</label>
                            <input type="radio" name="font_size" id="large" />
                        </div>

                        <div>
                            <label for="bold">Жирный шрифт</label>
                            <input type="checkbox" id="bold"/>
                        </div>

                    <div className={styles.text_example}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque, enim id mollis lacinia, lorem turpis condimentum lorem, vel auctor tortor odio quis dui. Vivamus maximus metus ac orci luctus ornare pulvinar ut nisi. Ut et odio elit. Nam nec erat ac dui tempor congue. Nam a convallis arcu, a consequat nunc. Integer lorem elit, porta non ex sed, suscipit fringilla nunc. Etiam molestie ac dui id lobortis. Sed blandit faucibus facilisis. Ut non ante sodales, mollis risus sed, gravida dui. Nunc cursus mi imperdiet augue laoreet, vel egestas nisi lacinia. Nulla eu ornare tortor, quis pretium ipsum. Duis viverra vehicula tempor. Nunc sed tempor purus. Sed non bibendum lacus. Vestibulum augue risus, ultricies ac laoreet in, iaculis sagittis massa.</p>
                    </div>
                    </div>
                </div>
                
            </div>
        </>
    )

}

export default SettingsPage