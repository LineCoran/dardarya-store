import { changePage } from '../../helpers/ChangePage';
import MyButton from '../UI/MyButton/MyButton';
import './Greeting.css';

function Greeting() {

    return (
        <section id='greeting' className="main-page greeting">
            <div className='greeting-inner'>
                <div className='greeting-title-list'>
                    <h2 className='title greeting-title'>
                        Привет, меня зовут Даша.
                    </h2>
                    <h2 className='greeting-title'>
                        Я посредник по работе с китаем
                    </h2>  
                </div>
                <div className='greeting-button-wrapper'>
                    <MyButton showPage={changePage} page='calculate' text='Расчет' color='blue'/>
                    <MyButton showPage={changePage} page='about' text='Обо мне' color='white'/>
                </div>
            </div>
        </section>
    )
}

export default Greeting;