import styles from './styles.module.css'

import TrashIcon from '../../assets/icons/trash.svg'
import { Task } from '../../@types/Tasks'
import { useTasks } from '../../hooks/useTasks'

interface CardProps{
    data: Task
}

export function Card({ data }: CardProps){
    const { toggleMark, removeTask } = useTasks()

    return (
        <div className={ styles.container }>
            <label className={ styles.checkboxContainer }>
                <input 
                    type="checkbox" 
                    checked={ data.isFinished }
                    onChange={() => toggleMark(data.id)}
                />
                <span className={ styles.checkmark }></span>
            </label>
            <p>{ data.content }</p>
            <button type="button" onClick={() => removeTask(data.id)}>
                <img src={ TrashIcon } alt="delete-buttom" />
            </button>
        </div>
    )
}