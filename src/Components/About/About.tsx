import { changePage } from '../../helpers/ChangePage';
import ContactLink from '../ContactLink/ContactLink';
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
                      imgSrc='https://cdn.iconscout.com/icon/free/png-512/instagram-216-721958.png?w=256&f=avif'
                      name='Instagram'
                      />
                      <ContactLink
                      link='https://t.me/dorogyshadasha/'
                      imgSrc='https://cdn.iconscout.com/icon/free/png-512/telegram-2752057-2284874.png?w=256&f=avif'
                      name='Telegram'
                      />
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