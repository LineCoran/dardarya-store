import './NavLink.css';

interface INavLink {
    name: string;
}

function NavLink({name}: INavLink) {
    return (
        <li className="nav-list-item">
            <button className='nav-list-link'>{name}</button>
        </li>
    )
}

export default NavLink;