import { Home } from '@mui/icons-material';
import { Fab } from '@mui/material';
import changePage from '../../helpers/ChangePage';
import AlibabaIcon from '../Icons/AlibabaIcon';
import TaobaoIcon from '../Icons/TaobaoIcon';
import StoreButton from '../UI/StoreButton/StoreButton';
import './Calculate.css';

enum Sites {
  alibaba = 'alibaba',
  taobao = 'taobao',
}

const Calculate = () => {
  return (
    <section id={'calculate'} className={'main-page calculate absolute'}>
      <div className={'calculate-inner'}>
        <StoreButton site={Sites.taobao} showPage={changePage}>
          <TaobaoIcon />
        </StoreButton>

        <StoreButton site={Sites.alibaba} showPage={changePage}>
          <AlibabaIcon />
        </StoreButton>
      </div>
      <div className={'about-button-wrapper'}>
        <Fab onClick={() => changePage('greeting')} color={'primary'}>
          <Home />
        </Fab>
      </div>
    </section>
  );
};

export default Calculate;
