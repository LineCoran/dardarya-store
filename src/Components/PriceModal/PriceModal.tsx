import priceForDeliveryInBLR from '../../helpers/DeliveryInBLR';
import { useAppSelector } from '../../hooks';
import ProductResult from '../ProductResult/ProductResult';
import './PriceModal.css';

function PriceModal() {
  const usd = useAppSelector((store) => store.modalReducer.usdValue);
  const products = useAppSelector((store) => store.productReducer.product);

  // цена выкупа
  const allPriceInChinaAlibaba = products.alibaba.reduce((acc, item) => acc + Number(item.price), 0);
  const allPriceInChinaTaobao = products.taobao.reduce((acc, item) => acc + Number(item.price), 0);
  const allPriceInChina = Number(allPriceInChinaAlibaba) + Number(allPriceInChinaTaobao);

  const allDeliveryInChina = Number(products.alibaba.reduce((acc, item) => acc + Number(item.delivery), 0));
  const allPriceInBLRWithOutPercent = Number(((allPriceInChina + allDeliveryInChina) / 2).toFixed(2));

  const allPriceInBYN = allPriceInBLRWithOutPercent > 400 ? allPriceInBLRWithOutPercent.toFixed(2) : (allPriceInBLRWithOutPercent * 1.05).toFixed(2);

  // доставка с Китая до РБ
  const allWeightAlibaba = products.alibaba.reduce((acc, item) => acc + Number(item.weight), 0);
  const allWeightTaobao = products.taobao.reduce((acc, item) => acc + Number(item.weight), 0);
  const allWeight = Number(allWeightAlibaba) + Number(allWeightTaobao);

  const allPriceForDeliveryFromChinaToRB = allWeight > 50 ? (allWeight * 7.5 * usd).toFixed(2) : (allWeight * 7 * usd).toFixed(2);

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
      {
        (products.alibaba.length) 
        ? <div className='result-price-list' key={'alibaba'}>
          <h3 className='title-price'>Товары с Alibaba</h3>
          {
            products.alibaba.map((product) => (
              <ProductResult key={product.id * Math.random()} product={product} />
          ))}
          </div>
        : <></>
      }

      {
        (products.taobao.length) 
        ? <div className='result-price-list' key={'taobao'}>
          <h3 className='title-price'>Товары с Taobao</h3>
          {
            products.taobao.map((product) => (
              <ProductResult key={product.id * Math.random()} product={product} />
          ))}
          </div>
        : <></>
      }
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
