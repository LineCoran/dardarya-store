import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MySlider from '../../Components/Slider/MySlider';
import { Pages } from '../../core/Pages';
import './Reviews.css';

export const Reviews = () => {
  const navigate = useNavigate();
  const handleClickMain = () => navigate(Pages.Main);

  return (
    <section id={'stars'} className={'main-page stars absolute'}>
      <div className={'stars-inner'}>
        <MySlider />
        <div className={'about-button-wrapper'}>
          <Button variant={'contained'} size={'large'} onClick={handleClickMain}>
            Главная
          </Button>
        </div>
      </div>
    </section>
  );
};
