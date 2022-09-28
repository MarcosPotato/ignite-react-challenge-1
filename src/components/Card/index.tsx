import styles from './styles.module.css'

import TrashIcon from '../../assets/icons/trash.svg'

export function Card(){
    return (
        <div className={ styles.container }>
            <label className={ styles.checkboxContainer }>
                <input type="checkbox"/>
                <span className={ styles.checkmark }></span>
            </label>
            <p>Mensagem de teste</p>
            <button>
                <img src={ TrashIcon } alt="delete-buttom" />
            </button>
        </div>
    )
}