import { Button, ButtonGroup } from "@mui/material";
import { changePage } from "../../helpers/ChangePage";
import { useAppDispatch, useAppSelector } from "../../hooks";
import ProductList from "../ProductList/ProductList";
import { addProduct, clearProducts } from "../../store/productSlice";
import './CalculateSite.css';

interface ICalculateSite {
    site: string;
}

function CalculateSite({ site }: ICalculateSite) {

    const products = useAppSelector((store) => store.productReducer.product);
    const dispatch = useAppDispatch()
    const countProducts = products.length || 0;

    // Добавляем продукт
    const addProductHandler = () => {
        dispatch(addProduct(true));
    }

    // Очищаем все продукты
    const clearProductHandler = () => {
        dispatch(clearProducts(true));
    }

    function checkCanWeAdd() {
        if (products.length === 0) return true;
        return products.every((product) => product.status === 'valid');
    }

    const canWeAdd = checkCanWeAdd();

    const homeHandle = () => {
        clearProductHandler()
        changePage('greeting')
    }

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
                  onClick={addProductHandler}
                  disabled={!canWeAdd}
                >
                    Добавить
                </Button>
                <ButtonGroup fullWidth={true} sx={{marginTop: '0.5rem'}} variant="outlined" aria-label="outlined button group">

                <Button
                  variant="contained"
                  color="success"
                  size="medium"
                  disabled={!products.length || !canWeAdd}
                  onClick={() => alert('Еще не готово')}
                >
                    Рассчитать
                </Button>

                <Button
                  variant="contained"
                  size="medium"
                  onClick={homeHandle}
                >
                    Домой
                </Button>

                <Button
                  variant="contained"
                  size="medium"
                  color="error"
                  disabled={!products.length}
                  onClick={clearProductHandler}
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