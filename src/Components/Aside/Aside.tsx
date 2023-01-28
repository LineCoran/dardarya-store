import Navigation from "../Navigation/Navigation";
import './Aside.css';

const navElements = ['Главная', 'Расчет', 'Отзывы', 'Контакты'];

function Aside() {
    return (
        <aside className='aside'>
            <h2 className='aside-title'>
                DarDaryya
            </h2>
            <Navigation links={navElements}/>
        </aside>
    )
}

export default Aside;