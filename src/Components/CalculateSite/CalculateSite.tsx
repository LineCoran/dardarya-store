import { Button, ButtonGroup } from "@mui/material";
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
                    {`Количество товаров: ${countProducts}`}
                </h4>
                <ProductList site={site} products={products} />
                <div className="site-calculate-footer">
                <Button
                  variant="contained"
                  sx={{marginTop: '0.5rem'}}
                  size="medium"
                  onClick={() => setProduct([...products, { id: products.length+1}])}
                >
                    Добавить
                </Button>
                <ButtonGroup fullWidth={true} sx={{marginTop: '0.5rem'}} variant="outlined" aria-label="outlined button group">

                <Button
                  variant="contained"
                  color="success"
                  size="medium"
                  disabled={!products.length}
                  onClick={() => alert('Еще не готово')}
                >
                    Рассчитать
                </Button>

                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => changePage('greeting')}
                >
                    Домой
                </Button>

                <Button
                  variant="contained"
                  size="medium"
                  color="error"
                  disabled={!products.length}
                  onClick={() => setProduct([])}
                >
                    Очистить
                </Button>
                </ButtonGroup>
            </div>
        </div>
    </section>
    )
}

export default CalculateSite;