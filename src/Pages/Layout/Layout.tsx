import { Outlet } from 'react-router-dom';
import Aside from '../../Components/Aside/Aside';
import Container from '../../Components/Container/Container';
import { Footer } from '../../Components/Footer/Footer';
import './Layout.css';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { changeMenuVisible } from '../../store/menuSlice';

export const Layout = () => {

  const dispatch = useDispatch()

  const openMenu = () => {
    dispatch(changeMenuVisible(true))
  }


  return (
    <Container>
      <main className={'main'}>
        <div className='openMenuToggle'>
          <IconButton 
              onClick={openMenu} 
              sx={{zIndex: 100, color: 'rgb(229, 66, 125)', position: 'absolute', left: '0', top: '0', width: '50px', height: '50px', background: 'transparent'}}>
          <MenuIcon />
        </IconButton>
        </div>
        <Aside />
        <div className={'pages'}>

          <Outlet />
        </div>
      </main>
    </Container>
  );
};
