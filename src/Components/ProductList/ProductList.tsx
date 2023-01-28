import Product from "../Product/Product";
import './ProductList.css'

type product = {
    id: number;
}

interface IProductList {
    products: product[];
    site: string;
}

function ProductList({products, site}: IProductList) {
    if (products.length) {
        return (
            <div className="product-list">
                { products.map((product) => {
                                return  <Product site={site} key={product.id} id={product.id}/>
                            })
                        }
            </div>
        )
    } else {
        return (
            <h1 style={{color: 'black'}}>Товаров нет</h1>
        )
    }
}

export default ProductList;