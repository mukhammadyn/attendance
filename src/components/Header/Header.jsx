import { Link } from 'react-router-dom'
import cls from './styles.module.scss'

export const Header = () => {
  return <header className={cls.header }>
    <nav>
      <ul>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  </header>
}
