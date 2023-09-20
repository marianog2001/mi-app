import styles from './styles.module.css'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={styles['navbar']}>
            <Link to="/" >
                <img src="/killa.png" alt="page logo" className='ps-5'/>
            </Link>
            <ul>
                <li><Link to="/games/all">GAMES</Link></li>
                <li><Link to="/games/genres">GENRES</Link></li>
                <li><a href="https://dennatongames.com/" target='_blank'>MORE</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar