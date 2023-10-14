import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import changePage from '../../helpers/ChangePage';
import './Main.css';
import { Pages } from '../../core/Pages';

export const Main = () => {
  const navigate = useNavigate();
  const handleClickAbout = () => navigate(Pages.About);
  const handleClickCalculate = () => navigate(Pages.Calculate);
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
            onClick={handleClickCalculate}
          >
            Расчет
          </Button>

          <Button variant={'contained'} size={'large'} onClick={handleClickAbout}>
            Обо мне
          </Button>
        </div>
      </div>
    </section>
  );
};
