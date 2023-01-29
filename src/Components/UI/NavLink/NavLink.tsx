import changePage from '../../../helpers/ChangePage';
import './NavLink.css';

interface INavLink {
  name: string;
  id: string;
}

function NavLink({ name, id }: INavLink) {
  const classNameForLink =
    id !== 'greeting' ? 'nav-list-link' : 'nav-list-link nav-list-link-active';
  return (
    <li className='nav-list-item'>
      <button
        type='button'
        onClick={() => changePage(id)}
        id={`link-${id}`}
        className={classNameForLink}
      >
        {name}
      </button>
    </li>
  );
}

export default NavLink;
