import priceForDeliveryInBLR from '../../helpers/DeliveryInBLR';
import allPriceForDeliveryInBLR from '../../helpers/DeliveryInBLR';
import { useAppSelector } from '../../hooks';
import ProductResult from '../ProductResult/ProductResult';
import './PriceModal.css';

function PriceModal() {
  const usd = useAppSelector((store) => store.modalReducer.usdValue);
  const products = useAppSelector((store) => store.productReducer.product);

  // цена выкупа
  const allPriceInChina = products.reduce((acc, item) => acc + Number(item.price), 0);
  const allDeliverInChina = products.reduce((acc, item) => acc + Number(item.delivery), 0);
  const allPriceInBYN = (((allPriceInChina + allDeliverInChina) / 2) * 1.05).toFixed(2);

  // доставка с Китая до РБ
  const allWeight = products.reduce((acc, item) => acc + Number(item.weight), 0);
  const allPriceForDeliveryFromChinaToRB = (allWeight * 7.5 * usd).toFixed(2);

  // доставка по РБ
  const allPriceForDeliveryBLR = priceForDeliveryInBLR(Number(allWeight));

  const finalPrice =
    (Number(allPriceInBYN) + Number(allPriceForDeliveryFromChinaToRB) + Number(allPriceForDeliveryBLR)).toFixed(2);

  return (
    <div className='price-modal-wrapper'>
      <p>
        Курс на сегодня: <span style={{ fontWeight: '600' }}>1$ = {usd.toFixed(2)} BYN</span>
      </p>
      <hr />
      <br />
      {products.map((product) => (
        <ProductResult key={product.id} product={product} />
      ))}
      <hr />
      <br />
      <p>
        Общая масса товаров: <span style={{ fontWeight: '600' }}>{allWeight} кг.</span>
      </p>
      <p>
        Выкуп товаров: <span style={{ fontWeight: '600' }}>{allPriceInBYN} BYN</span>
      </p>
      <p>
        Доставка c Китая до РБ: <span style={{ fontWeight: '600' }}>{allPriceForDeliveryFromChinaToRB} BYN</span>
      </p>
      <p>
        Доставка по РБ: <span style={{ fontWeight: '600' }}>{allPriceForDeliveryBLR} BYN</span>
      </p>
      <br />
      <hr />
      <h3>Итого: {finalPrice} BYN</h3>
    </div>
  );
}

export default PriceModal;
