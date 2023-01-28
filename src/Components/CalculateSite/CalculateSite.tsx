import { Button } from "@mui/material";
import { useState } from "react";
import { changePage } from "../../helpers/ChangePage";
import ProductList from "../ProductList/ProductList";
import './CalculateSite.css'

interface IProduct {
    id: number;
}

interface ICalculateSite {
    site: string;
}

function CalculateSite({ site }: ICalculateSite) {

    const [products, setProduct] = useState<IProduct[]>([]);
    const countProducts = products.length || 0;

    return (
        <section id={site} className="main-page absolute">
        <div className='site-calculate'>
            <h4 className='title title-calc'>
                    {`Количестов товаров: ${countProducts}`}
                </h4>
                <ProductList site={site} products={products} />
                <div className="site-calculate-footer">
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setProduct([...products, { id: products.length+1}])}
                >
                    Добавить товар
                </Button>
            <div className='greeting-button-wrapper greeting-button-wrapper-three'>
                <Button
                  variant="contained"
                  color="success"
                  disabled={!products.length}
                  onClick={() => alert('Еще не готово')}
                >
                    Рассчитать
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  onClick={() => changePage('greeting')}
                >
                    На главную
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  disabled={!products.length}
                  onClick={() => setProduct([])}
                >
                    Очистить
                </Button>
            </div>
            </div>
        </div>
    </section>
    )
}

export default CalculateSite;