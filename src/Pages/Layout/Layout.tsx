import { Outlet } from 'react-router-dom';
import Aside from '../../Components/Aside/Aside';
import Container from '../../Components/Container/Container';
import './Layout.css';

export const Layout = () => {
  return (
    <Container>
      <main className={'main'}>
        <Aside />
        <div className={'pages'}>
          <Outlet />
        </div>
      </main>
    </Container>
  );
};
