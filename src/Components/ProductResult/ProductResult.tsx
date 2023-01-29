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
  const priceBYN = ((Number(product.price) / 2) * 1.05).toFixed(2);
  const priceDeliveryInChina = (Number(product.delivery) * usd).toFixed(2);
  return (
    <div>
      <h3>{`Товар: ${productNumber}`}</h3>
      <p>{`Масса: ${product.weight} кг.`}</p>
      <p>{`Цена выкупа: ${priceBYN} BYN`}</p>
      {product.delivery.length ? (
        <p>{`Цена доставки по Китаю: ${priceDeliveryInChina} BYN`}</p>
      ) : (
        <p>Доставка по Китаю бесплатная!</p>
      )}
      <br />
    </div>
  );
}

export default ProductResult;
