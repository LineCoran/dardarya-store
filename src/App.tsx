import './App.css';
import Container from './Components/Container/Container';
import { Router } from './providers/Router/Router';

const App = () => {
  return (
    <Container>
      <Router />
    </Container>
  );
};

export default App;
