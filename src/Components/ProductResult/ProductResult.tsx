type Product = {
    id: number;
    status: string;
    price: string;
    weight: string;
    delivery: string;
}

interface IProductResult {
    product: Product;
}

function ProductResult({ product }: IProductResult) {

    const productNumber = product.id + 1;
    const priceBYN = ((Number(product.price) / 2) * 1.05).toFixed(2);
    return (
        <div>
            <h3>{`Товар: ${productNumber}`}</h3>
            <p>{`Цена: ${priceBYN} BYN`}</p>
            <p>{`Масса: ${product.weight} кг.`}</p>
            { (product.delivery.length) 
                ? <p>{`Цена доставки по Китаю: ${product.delivery}`}</p>
                : <p>{`Доставка по Китаю бесплатная!`}</p>
                }
        </div>
    )
}

export default ProductResult;