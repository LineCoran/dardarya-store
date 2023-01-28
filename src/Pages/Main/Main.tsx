import Aside from '../../Components/Aside/Aside';
import Greeting from '../../Components/Greeting/Greeting';
import './Main.css';

function Main() {
    return (
        <main className='main'>
            <Aside />
            <Greeting />
        </main>
    )
}

export default Main;
