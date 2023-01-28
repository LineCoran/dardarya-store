import { changePage } from '../../helpers/ChangePage';
import MyButton from '../UI/MyButton/MyButton';
import './About.css';

function About() {

    return (
        <section id='about' className="main-page absolute">
        <div className='about-inner'>
            <div className='about-title-list'>
                <h2 className='about-title'>
                    Привет, меня зовут Даша
                </h2>
                <h2 className='about-title'>
                    Давай знакомится
                </h2>  
            </div>
            <div className='about-button-wrapper'>
                <MyButton showPage={changePage} page='greeting' text='Главная' color='blue'/>
                <MyButton showPage={changePage} page='calculate' text='Расчет' color='white'/>
            </div>
        </div>
    </section>
    )
}

export default About;