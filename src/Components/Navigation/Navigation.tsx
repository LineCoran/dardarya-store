import NavLink from '../UI/NavLink/NavLink';
import './Navigation.css';


type navElement = {
    name: string;
    id: string;
}

interface INavigation {
    links: navElement[];
}

function Navigation({ links }: INavigation) {
    return (
        <nav className="nav">
            <ul className="nav-list">
                {links.map((link, index) => <NavLink key={index} name={link.name} id={link.id}/>)}
            </ul>
        </nav>
    )
}

export default Navigation;