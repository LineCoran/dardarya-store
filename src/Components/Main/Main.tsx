import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import changePage from '../../helpers/ChangePage';
import './Main.css';
import { Pages } from '../../core/Pages';

export const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(Pages.About);
  return (
    <section id={'greeting'} className={'main-page greeting visible'}>
      <div className={'greeting-inner'}>
        <div className={'greeting-title-list'}>
          <h2 className={'page-title greeting-title title'}>Привет, меня зовут Дарья.</h2>
          <h2 className={'page-title greeting-title title'}>Я посредник по работе с Китаем</h2>
        </div>

        <div className={'greeting-button-wrapper'}>
          <Button
            variant={'contained'}
            color={'success'}
            size={'large'}
            onClick={() => changePage('calculate')}
          >
            Расчет
          </Button>

          <Button variant={'contained'} size={'large'} onClick={handleClick}>
            Обо мне
          </Button>
        </div>
      </div>
    </section>
  );
};
