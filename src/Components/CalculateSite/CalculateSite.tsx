import { Button, ButtonGroup } from '@mui/material';
import changePage from '../../helpers/ChangePage';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ProductList from '../ProductList/ProductList';
import { clearProducts } from '../../store/productSlice';
import { changeModalVisible } from '../../store/modalSlice';
import './CalculateSite.css';
import Sites from '../../enums/enums';

interface ICalculateSite {
  site: Sites;
}

function CalculateSite({ site }: ICalculateSite) {
  const products = useAppSelector((store) => store.productReducer.product[site]);
  const dispatch = useAppDispatch();
  const countProducts = products.length || 0;

  // Очищаем все продукты
  const clearProductHandler = () => {
    dispatch(clearProducts(site));
  };

  function checkCanWeAdd() {
    if (products.length === 0) return true;
    return products.every((product) => product.status === 'valid');
  }

  const canWeAdd = checkCanWeAdd();

  const homeHandle = () => {
    changePage('greeting');
  };
  console.log(site);
  return (
    <section id={site} className='main-page absolute'>
      <div className='site-calculate'>
        <h4 className='title title-calc'>{`Количество товаров: ${countProducts}`}</h4>
        <ProductList site={site} products={products} canWeAdd={canWeAdd} />

        <div className='site-calculate-footer'>
          <ButtonGroup
            fullWidth
            sx={{ marginTop: '0.5rem' }}
            variant='outlined'
            aria-label='outlined button group'
          >
            <Button
              variant='contained'
              color='success'
              size='medium'
              disabled={!products.length || !canWeAdd}
              onClick={() => dispatch(changeModalVisible(true))}
            >
              Рассчитать
            </Button>

            <Button variant='contained' size='medium' onClick={homeHandle}>
              Домой
            </Button>

            <Button
              variant='contained'
              size='medium'
              color='error'
              disabled={!products.length}
              onClick={clearProductHandler}
            >
              Очистить
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
}

export default CalculateSite;
