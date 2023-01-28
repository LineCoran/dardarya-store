import Product from "../Product/Product";
import './ProductList.css'

type product = {
    id: number;
}

interface IProductList {
    products: product[]
}

function ProductList({products}: IProductList) {
    if (products.length) {
        return (
            <div className="product-list">
                { products.map((product) => {
                                return  <Product key={product.id} id={product.id}/>
                            })
                        }
            </div>
            
        )
    } else {
        return (
            <h1>Продуктов нет</h1>
        )
    }
}

export default ProductList;