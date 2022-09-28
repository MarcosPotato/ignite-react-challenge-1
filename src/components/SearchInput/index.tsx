import styles from './styles.module.css'

import plusIcon from '../../assets/icons/plus.svg'

export function SearchInput(){
    return (
        <div className={ styles.container }>
            <input 
                className={ styles.searchInput } 
                type="text" 
                name="search-field" 
                placeholder='Adicione uma nova tarefa'
            />
            <button className={ styles.searchButton } >
                Criar
                <img src={ plusIcon } alt="plus-icon"/>
            </button>
        </div>
    )
}