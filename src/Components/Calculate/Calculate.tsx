import { Button } from '@mui/material';
import { changePage } from '../../helpers/ChangePage';
import AlibabaIcon from '../Icons/AlibabaIcon';
import TaobaoIcon from '../Icons/TaobaoIcon';
import StoreButton from '../UI/StoreButton/StoreButton';
import './Calculate.css';

enum Sites {
    alibaba = 'alibaba',
    taobao = 'taobao',
}

function Calculate() {
    return (
                <section id='calculate' className="main-page calculate absolute">
                <div className='calculate-inner'>
                    <StoreButton site={Sites.taobao} showPage={changePage}>
                        <TaobaoIcon />
                    </StoreButton>
                    
                    <StoreButton site={Sites.alibaba} showPage={changePage}>
                        <AlibabaIcon />  
                    </StoreButton>               
                </div>
                <div className='about-button-wrapper'>
                    <Button
                    variant="contained"
                    size="large"
                    onClick={() => changePage('greeting')}
                    >
                        На главную
                    </Button>
                </div>
            </section>
        )
}

export default Calculate;