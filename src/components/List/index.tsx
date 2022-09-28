import { Card } from '../Card'
import { EmptyListCard } from '../EmptyListCard'
import styles from './styles.module.css'

export function List(){
    return (
        <div className={ styles.container }>
            <header className={ styles.listHeader }>
                <div className={ styles.listCount }>
                    <p>Tarefas criadas</p>
                    <span>5</span>
                </div>
                <div className={ styles.tasksFinished }>
                    <p>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </header>
            <section>
                <EmptyListCard />
                <Card />
            </section>
        </div>
    )
}