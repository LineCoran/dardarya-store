import { Button } from '@mui/material';
import changePage from '../../helpers/ChangePage';
import MySlider from '../Slider/MySlider';
import './Stars.css';

function Stars() {
  return (
    <section id='stars' className='main-page stars absolute'>
      <div className='stars-inner'>
        <MySlider />
        <div className='about-button-wrapper'>
          
          <Button variant='contained' size='large' onClick={() => changePage('greeting')}>
            Главная
          </Button>

        </div>
      </div>
    </section>
  );
}

export default Stars;
