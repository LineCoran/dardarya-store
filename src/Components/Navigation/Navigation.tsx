import NavLink from '../UI/NavLink/NavLink';
import './Navigation.css';
import { NavElement } from '../Aside/Aside';

interface INavigation {
  links: NavElement[];
}

const Navigation = ({ links }: INavigation) => {
  return (
    <nav className={'nav'}>
      <ul className={'nav-list'}>
        {links.map((link) => (
          <NavLink key={link.path} name={link.name} path={link.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
