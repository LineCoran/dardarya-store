import NavLink from '../UI/NavLink/NavLink';
import './Navigation.css';

type NavElement = {
  name: string;
  id: string;
};

interface INavigation {
  links: NavElement[];
}

function Navigation({ links }: INavigation) {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        {links.map((link) => (
          <NavLink key={link.id} name={link.name} id={link.id} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
