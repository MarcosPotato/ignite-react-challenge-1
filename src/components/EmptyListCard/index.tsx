import style from './styles.module.css'

import ClipboardIcon from '../../assets/icons/clipboard.svg'

export function EmptyListCard(){
    return (
        <div className={ style.container }>
            <img src={ ClipboardIcon } alt="empty-tasks"/>
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}