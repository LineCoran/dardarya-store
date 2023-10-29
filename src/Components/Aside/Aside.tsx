import Navigation from '../Navigation/Navigation';
import './Aside.css';
import { Pages } from '../../core/Pages';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeMenuVisible } from '../../store/menuSlice';
import { Button } from '@mui/material';

export const navElements: NavElement[] = [
  {
    name: 'Главная',
    path: Pages.Main,
  },
  {
    name: 'Расчет',
    path: Pages.Calculate,
  },
  {
    name: 'Обо мне',
    path: Pages.About,
  },
  {
    name: 'Отзывы',
    path: Pages.Reviews,
  },
  {
    name: 'Заказ',
    path: Pages.CreateOrder,
  },
  {
    name: 'Заказы',
    path: Pages.Orders,
  },
];

export type NavElement = {
  name: string;
  path: string;
};

const Aside = () => {
  const { isOpen } = useAppSelector((state) => state.menuSlice)
  const dispatch = useAppDispatch()

  const closeAfterClickOnLink = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target.id && e.target.id.includes('link')) {
       dispatch(changeMenuVisible(false))
    }
  }

  const closeMenu = () => {
    dispatch(changeMenuVisible(false))
  }
  return (
    <aside onClick={(e) => closeAfterClickOnLink(e)} className={isOpen ? 'aside aside-show' : 'aside'}>
      <h2 className={'aside-title'}>DarDaryya</h2>
      <Navigation links={navElements} />
      <div className='closeWrapper'>
        <Button variant='contained' onClick={closeMenu}>Закрыть</Button>
      </div>
    </aside>
  );
};

export default Aside;
