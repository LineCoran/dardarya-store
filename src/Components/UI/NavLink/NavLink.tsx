import { useNavigate } from 'react-router-dom';
import changePage from '../../../helpers/ChangePage';
import './NavLink.css';

interface INavLink {
  name: string;
  path: string;
}

const NavLink = ({ name, path }: INavLink) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
    changePage(path);
  };
  const classNameForLink =
    path !== '/main' ? 'nav-list-link' : 'nav-list-link nav-list-link-active';
  return (
    <li className={'nav-list-item'}>
      <button
        type={'button'}
        onClick={handleClick}
        id={`link-${path}`}
        className={classNameForLink}
      >
        {name}
      </button>
    </li>
  );
};

export default NavLink;
