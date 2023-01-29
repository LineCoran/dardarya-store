import { useAppSelector } from '../../hooks';
import ProductResult from '../ProductResult/ProductResult';
import './PriceModal';

function PriceModal() {

    const usd = new Promise(async (res, rej) => {
        try {
            const response = await fetch('https://belarusbank.by/api/kursExchange?city=Минск');
            console.log(response);
            const data = await response.json();
            res(data);
        } catch(err) {
            rej(err)
        }
    })

    const wow = usd.then((result) => console.log(result));

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