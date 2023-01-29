import { useAppSelector } from '../../hooks';
import ProductResult from '../ProductResult/ProductResult';
import './PriceModal';

function PriceModal() {

    fetch('https://belarusbank.by/api/kursExchange?city=Минск')
      .then(response => response.json())
      .then(json => console.log(json))

    const products = useAppSelector((store) => store.productReducer.product);
    return (
        <div className='price-modal-wrapper'>
            {products.map((product) => {
                return <ProductResult key={product.id} product={product} />
            })}
        </div>
    )
}

export default PriceModal;