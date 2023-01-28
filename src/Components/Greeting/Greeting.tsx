import MyButton from '../UI/MyButton/MyButton';
import './Greeting.css';

function Greeting() {
    return (
        <section className="greeting">
            <div className='greeting-inner'>
                <div className='greeting-title-list'>
                    <h2 className='greeting-title'>
                        Привет, меня зовут Даша.
                    </h2>
                    <h2 className='greeting-title'>
                        Я посредник по работе с китаем
                    </h2>  
                </div>
                <div className='greeting-button-wrapper'>
                    <MyButton text='Расчет' color='blue'/>
                    <MyButton text='Отзывы' color='white'/>
                </div>
            </div>
        </section>
    )
}

export default Greeting;