import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { addProduct } from "../../store/productSlice";
import Product from "../Product/Product";
import './ProductList.css'

type product = {
    id: number;
}

interface IProductList {
    products: product[];
    site: string;
    canWeAdd: boolean;
}

function ProductList({products, site, canWeAdd}: IProductList) {

    const dispatch = useAppDispatch()

    const addProductHandler = () => {
        dispatch(addProduct(true));
    }


    if (products.length) {
        return (
            <div className="product-list-wrapper">
<div className="product-list">
                { products.map((product) => {
                                return  <Product site={site} key={product.id} id={product.id}/>
                            })
                        }
                
            </div>
            <Button
                  variant="contained"
                  sx={{
                    marginTop: '0.5rem',
                }}
                  size="medium"
                  onClick={addProductHandler}
                  disabled={!canWeAdd}
                >
                    Добавить
                </Button>
            </div>
        )
    } else {
        return (
            <div className="product-list-wrapper">
            <div className="product-list">
                        </div>
                        <Button
                              variant="contained"
                              sx={{
                                marginTop: '0.5rem',
                            }}
                              size="medium"
                              onClick={addProductHandler}
                              disabled={!canWeAdd}
                            >
                                Добавить
                            </Button>
                        </div>
        )
    }
}

export default ProductList;