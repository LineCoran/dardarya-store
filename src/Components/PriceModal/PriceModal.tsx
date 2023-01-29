import { allPriceForDeliveryInBLR } from '../../helpers/DeliveryInBLR';
import { useAppSelector } from '../../hooks';
import ProductResult from '../ProductResult/ProductResult';
import './PriceModal';

function PriceModal() {
    const usd = useAppSelector((store) => store.modalReducer.usdValue);
    const products = useAppSelector((store) => store.productReducer.product);

    //цена выкупа
    const allPriceInChina = products.reduce((acc, item) => acc+Number(item.price), 0);
    const allPriceInBYN = ((allPriceInChina / 2) * 1.05).toFixed(2);


    //доставка по китаю
    const allWeightInChina = products.reduce((acc, item) => acc+Number(item.delivery), 0);
    const allPriceForDeliveryInChina = (allWeightInChina * usd).toFixed(2);


    //доставка по РБ
    const allWeightInBLR = products.reduce((acc, item) => acc+Number(item.weight), 0);
    const allPriceForDeliveryBLR = allPriceForDeliveryInBLR(allWeightInBLR);

    const finalPrice = Number(allPriceInBYN) + Number(allPriceForDeliveryInChina) + Number(allPriceForDeliveryBLR);

    return (
        <div className='price-modal-wrapper'>
            <p>Курс доллара: <span style={{fontWeight: '600'}}>${usd}</span></p>
            <hr />
            <br />
            {products.map((product) => {
                return <ProductResult key={product.id} product={product} />
            })}
            <hr />
            <br />
            <p>Общая масса товаров: <span style={{fontWeight: '600'}}>{allWeightInBLR} кг.</span></p>
            <p>Доставка по Китаю: <span style={{fontWeight: '600'}}>{allPriceForDeliveryInChina} BYN</span></p>
            <p>Выкуп товаров: <span style={{fontWeight: '600'}}>{allPriceInBYN} BYN</span></p>
            <p>Доставка по РБ: <span style={{fontWeight: '600'}}>{allPriceForDeliveryBLR} BYN</span></p>
            <br />
            <hr />
            <br />
            <h3>Итого: {finalPrice} BYN</h3>
        </div>
    )
}

export default PriceModal;