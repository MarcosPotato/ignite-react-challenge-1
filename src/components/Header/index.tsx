import style from './styles.module.css'

import Logo from '../../assets/icons/logo.svg'

export function Header(){
    return (
        <div className={ style.header }>
            <img src={ Logo } alt="to-do"/>
        </div>
    )
}