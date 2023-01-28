import { changePage } from '../../helpers/ChangePage';
import ContactLink from '../ContactLink/ContactLink';
import InstagramIcon from '../Icons/InstagramIcon';
import TelegramIcon from '../Icons/TelegramIcon';
import MyButton from '../UI/MyButton/MyButton';
import './About.css';

function About() {

    return (
        <section id='about' className="main-page about absolute">
        <div className='about-inner'>
            <div className='about-title-list'>
                <h2 className='page-title title about-title'>
                    Давай знакомиться! &#128075;
                </h2>
                <p className='about-text'>
                    Меня зовут Даша и я посредник по закупкам товаров в Китае. 
                    Я привезла 300 кг различного товара, могу помочь и тебе!
                </p>

                <div className='contacts'>
                    <ContactLink
                      link='https://www.instagram.com/dardaryya/'
                      name='Instagram'
                      >
                        <InstagramIcon />
                    </ContactLink>
                    <ContactLink
                      link='https://t.me/dorogyshadasha/'
                      name='Telegram'
                    >
                      <TelegramIcon />
                    </ContactLink>
                </div>
            </div>
            <div className='about-button-wrapper'>
                <MyButton showPage={changePage} page='greeting' text='Главная' color='blue'/>
            </div>
        </div>
    </section>
    )
}

export default About;