import About from '../../Components/About/About';
import Aside from '../../Components/Aside/Aside';
import Calculate from '../../Components/Calculate/Calculate';
import Greeting from '../../Components/Greeting/Greeting';
import './Main.css';

function Main() {
    return (
        <main className='main'>
            <Aside />
            <div className='pages'>
                <Greeting />
                <Calculate />
                <About />
            </div>
        </main>
    )
}

export default Main;
