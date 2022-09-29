import styles from './styles.module.css'

import plusIcon from '../../assets/icons/plus.svg'
import { useTasks } from '../../hooks/useTasks'
import { useState } from 'react'

export function NewTaskInput(){

    const { addTask } = useTasks()

    const [content, setContent] = useState<string>("")

    const handleAddTaks = () => {
        addTask(content)
        setContent("")
    }

    return (
        <div className={ styles.container }>
            <input 
                className={ styles.newTaskInput } 
                type="text" 
                name="newTask-field" 
                placeholder='Adicione uma nova tarefa'
                value={ content }
                onChange={ event => setContent(event.target.value) }
            />
            <button 
                className={ styles.newTaskButton }
                type="button"
                onClick={ handleAddTaks }
            >
                Criar
                <img src={ plusIcon } alt="plus-icon"/>
            </button>
        </div>
    )
}