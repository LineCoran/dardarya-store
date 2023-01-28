import NavLink from '../UI/NavLink/NavLink';
import './Navigation.css';

interface INavigation {
    links: string[];
}

function Navigation({ links }: INavigation) {
    return (
        <nav className="nav">
            <ul className="nav-list">
                {links.map((link, index) => <NavLink key={index} name={link}/>)}
            </ul>
        </nav>
    )
}

export default Navigation;