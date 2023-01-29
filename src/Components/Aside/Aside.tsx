import Navigation from "../Navigation/Navigation";
import './Aside.css';

const navElements: navElement[] = [
    {
        name: 'Главная',
        id: 'greeting'
    },
    {
        name: 'Расчет',
        id: 'calculate'
    },
    {
        name: 'Обо мне',
        id: 'about'
    },
]

type navElement = {
    name: string;
    id: string;
}

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