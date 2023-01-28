import { changePage } from '../../helpers/ChangePage';
import AlibabaIcon from '../Icons/AlibabaIcon';
import TaobaoIcon from '../Icons/TaobaoIcon';
import MyButton from '../UI/MyButton/MyButton';
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
                    <MyButton showPage={changePage} page='greeting' text='На главную' color='blue'/>
                </div>
            </section>
        )
}

export default Calculate;