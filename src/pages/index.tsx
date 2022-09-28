import { Header } from '../components/Header'
import { List } from '../components/List'
import { SearchInput } from '../components/SearchInput'
import styles from './styles.module.css'

export function Home() {
    return (
        <div className={ styles.appContainer }>
            <Header />
            <section className={ styles.toDoSection }>
                <SearchInput />
                <List />
            </section>
        </div>
    )
}