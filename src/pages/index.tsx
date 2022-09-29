import { TasksProvider } from '../context/tasks'

import { Header } from '../components/Header'
import { List } from '../components/List'
import { NewTaskInput } from '../components/NewTaskInput'

import styles from './styles.module.css'

export function Home() {
    return (
        <div className={ styles.appContainer }>
            <Header />
            <TasksProvider>
                <section className={ styles.toDoSection }>
                    <NewTaskInput />
                    <List />
                </section>
            </TasksProvider>
        </div>
    )
}