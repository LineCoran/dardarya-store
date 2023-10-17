import Navigation from '../Navigation/Navigation';
import './Aside.css';
import { Pages } from '../../core/Pages';

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
    path: Pages.Order,
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
  return (
    <aside className={'aside'}>
      <h2 className={'aside-title'}>DarDaryya</h2>
      <Navigation links={navElements} />
    </aside>
  );
};

export default Aside;
