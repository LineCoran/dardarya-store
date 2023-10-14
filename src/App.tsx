import './App.css';
import Container from './Components/Container/Container';
import { Router } from './providers/Router/Router';
import { useAppDispatch } from './hooks';
import { changeUsdSlice } from './store/modalSlice';
import { TransitionsModal } from './Components/TransitionsModal/TransitionsModal';

const App = () => {
  const dispatch = useAppDispatch();
  fetch('https://www.nbrb.by/api/exrates/rates/431')
    .then((response) => response.json())
    .then((json) => dispatch(changeUsdSlice(json.Cur_OfficialRate)));
  return (
    <Container>
      <TransitionsModal />
      <Router />
    </Container>
  );
};

export default App;
