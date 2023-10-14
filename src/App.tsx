import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './core/theme/theme';
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
    <ThemeProvider theme={theme}>
      <Container>
        <TransitionsModal />
        <Router />
      </Container>
    </ThemeProvider>
  );
};

export default App;
