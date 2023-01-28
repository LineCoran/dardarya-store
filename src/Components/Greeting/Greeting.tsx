import { changePage } from '../../helpers/ChangePage';
import MyButton from '../UI/MyButton/MyButton';
import './Greeting.css';

function Greeting() {

    return (
        <section id='greeting' className="main-page greeting visible">
            <div className='greeting-inner'>
                <div className='greeting-title-list'>
                    <h2 className='page-title greeting-title title'>
                        Привет, меня зовут Даша.
                    </h2>
                    <h2 className='page-title greeting-title title'>
                        Я посредник по работе с Китаем
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