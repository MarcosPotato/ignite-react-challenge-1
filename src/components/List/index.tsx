import { useTasks } from '../../hooks/useTasks'
import { Card } from '../Card'
import { EmptyListCard } from '../EmptyListCard'
import styles from './styles.module.css'

export function List(){

    const { tasksList } = useTasks()

    const finishedTasks = tasksList?.filter(task => task.isFinished )

    return (
        <div className={ styles.container }>
            <header className={ styles.listHeader }>
                <div className={ styles.listCount }>
                    <p>Tarefas criadas</p>
                    <span>{ tasksList?.length }</span>
                </div>
                { tasksList?.length > 0 && (
                    <div className={ styles.tasksFinished }>
                        <p>Concluídas</p>
                        <span>{ finishedTasks?.length } de { tasksList.length }</span>
                    </div>
                )}
            </header>
            <section>
                { tasksList?.length > 0 ? (
                    tasksList.map(task => (
                        <Card key={ task.id } data={ task } />
                    ))
                ): (
                    <EmptyListCard />
                )}
            </section>
        </div>
    )
}