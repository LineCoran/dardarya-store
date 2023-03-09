import { useAppSelector } from '../../hooks';

type Product = {
  id: number;
  status: string;
  price: string;
  weight: string;
  delivery: string;
};

interface IProductResult {
  product: Product;
}

function ProductResult({ product }: IProductResult) {
  const productNumber = product.id + 1;
  const usd = useAppSelector((store) => store.modalReducer.usdValue);
  const priceBYN = (((Number(product.price) + Number(product.delivery)) / 2) * 1.05).toFixed(2);
  const priceDeliveryFromChinaToBLR = (Number(product.weight) * usd * 7.5).toFixed(2);
  return (
    <div>
      <h3>{`Товар: ${productNumber}`}</h3>
      <p>{`Масса: ${product.weight} кг.`}</p>
      <p>{`Цена выкупа: ${priceBYN} BYN`}</p>
      <p>{`Цена доставки до РБ: ${priceDeliveryFromChinaToBLR} BYN`}</p>
      <hr />
    </div>
  );
}

export default ProductResult;
