import styles from '/src/styles/FiltersPanel.module.scss'

function FiltersPanel(){
    return(
        <>
        <div className={styles.container}>
            <h1 className={styles.title}>Фильтры</h1>
            <div className={styles.filter_item}>
                <form>
                    <label for="author-select">Выберите автора</label>
                    <select name="author" id="author-select" multiple size={"6"}>
                        <option value="petersburg">Кузя</option>
                        <option value="samara">Петя</option>
                        <option value="perm">Ваня</option>
                        <option value="novosibirsk">Аня</option>
                        <option value="petersburg">Кузя</option>
                        <option value="samara">Петя</option>
                        <option value="perm">Ваня</option>
                        <option value="novosibirsk">Аня</option>
                    </select>
                </form>
            </div>
            <div className={styles.filter_item}>
                <p>Год выпуска:</p>
                <input type="range" />
            </div>
            <div className={[styles.filter_item, styles.favourite].join(' ')}>
                <p>Только избранные</p>
                <input type="checkbox" />
            </div>
            <div className={[styles.filter_item,].join(' ')}>
                <button className='button_general'>Применить</button>
                <button className='button_general'>Сбросить фильтры</button>
            </div>
        </div>
        </>
    )
}

export default FiltersPanel