import About from '../../Components/About/About';
import Aside from '../../Components/Aside/Aside';
import Calculate from '../../Components/Calculate/Calculate';
import CalculateSite from '../../Components/CalculateSite/CalculateSite';
import Greeting from '../../Components/Greeting/Greeting';
import TransitionsModal from '../../Components/TransitionsModal/TransitionsModal';
import { useAppDispatch } from '../../hooks';
import { changeUsdSlice } from '../../store/modalSlice';
import './Main.css';

function Main() {
  const dispatch = useAppDispatch();
  fetch('https://www.nbrb.by/api/exrates/rates/431')
    .then((response) => response.json())
    .then((json) => dispatch(changeUsdSlice(json.Cur_OfficialRate)));
  return (
    <main className='main'>
      <Aside />
      <div className='pages'>
        <Greeting />
        <Calculate />
        <About />
        <CalculateSite site='alibaba' />
        <CalculateSite site='taobao' />
        <TransitionsModal />
      </div>
    </main>
  );
}

export default Main;
