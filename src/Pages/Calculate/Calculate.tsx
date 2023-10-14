import { Home } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AlibabaIcon from '../../Components/Icons/AlibabaIcon';
import TaobaoIcon from '../../Components/Icons/TaobaoIcon';
import StoreButton from '../../Components/UI/StoreButton/StoreButton';
import './Calculate.css';
import { Pages } from '../../core/Pages';

export const Calculate = () => {
  const navigate = useNavigate();
  const handleClickMain = () => navigate(Pages.Main);
  const handleClickAlibaba = () => navigate(Pages.Alibaba);
  const handleClickTaobao = () => navigate(Pages.Taobao);
  return (
    <section id={'calculate'} className={'main-page calculate absolute'}>
      <div className={'calculate-inner'}>
        <StoreButton handleClick={handleClickTaobao}>
          <TaobaoIcon />
        </StoreButton>

        <StoreButton handleClick={handleClickAlibaba}>
          <AlibabaIcon />
        </StoreButton>
      </div>
      <div className={'about-button-wrapper'}>
        <Fab onClick={handleClickMain} color={'primary'}>
          <Home />
        </Fab>
      </div>
    </section>
  );
};
