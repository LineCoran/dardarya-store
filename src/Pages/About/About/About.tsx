import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContactLink from '../../../Components/ContactLink/ContactLink';
import InstagramIcon from '../../../Components/Icons/InstagramIcon';
import TelegramIcon from '../../../Components/Icons/TelegramIcon';
import { Pages } from '../../../core/Pages';
import './About.css';

export const About = () => {
  const navigate = useNavigate();
  const handleNavigateMain = () => navigate(Pages.Main);
  const handleNavigateReviews = () => navigate(Pages.Reviews);

  return (
    <section id={'about'} className={'main-page about absolute'}>
      <div className={'about-inner'}>
        <div className={'about-title-list'}>
          <h2 className={'page-title title about-title'}>Давай знакомиться! &#128075;</h2>
          <p className={'about-text'}>
            Меня зовут Дарья и я посредник по закупкам товаров в Китае. Я привезла более 1000 кг
            различного товара, могу помочь и тебе!
          </p>
          <div className={'contacts'}>
            <ContactLink link={'https://www.instagram.com/dardaryya/'} name={'Instagram'}>
              <InstagramIcon />
            </ContactLink>
            <ContactLink link={'https://t.me/dorogyshadasha/'} name={'Telegram'}>
              <TelegramIcon />
            </ContactLink>
          </div>
        </div>
        <div className={'about-button-wrapper'}>
          <Button variant={'contained'} size={'large'} onClick={handleNavigateMain}>
            Главная
          </Button>
          <Button variant={'contained'} size={'large'} onClick={handleNavigateReviews}>
            Отзывы
          </Button>
        </div>
      </div>
    </section>
  );
};
