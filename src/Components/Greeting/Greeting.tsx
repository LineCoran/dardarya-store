import { Button } from '@mui/material';
import changePage from '../../helpers/ChangePage';
import './Greeting.css';

function Greeting() {
  return (
    <section id='greeting' className='main-page greeting visible'>
      <div className='greeting-inner'>
        <div className='greeting-title-list'>
          <h2 className='page-title greeting-title title'>Привет, меня зовут Даша.</h2>
          <h2 className='page-title greeting-title title'>Я посредник по работе с Китаем</h2>
        </div>

        <div className='greeting-button-wrapper'>
          <Button
            variant='contained'
            color='success'
            size='large'
            onClick={() => changePage('calculate')}
          >
            Расчет
          </Button>

          <Button variant='contained' size='large' onClick={() => changePage('about')}>
            Обо мне
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
