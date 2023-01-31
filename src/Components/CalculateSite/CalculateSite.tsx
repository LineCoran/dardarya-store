import { ButtonGroup, Fab } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Home from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
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
  return (
    <section id={site} className='main-page absolute'>
      <div className='site-calculate'>
        <h4 className='title title-calc'>{`Количество товаров: ${countProducts}`}</h4>
        <ProductList site={site} products={products} canWeAdd={canWeAdd} />

        <div className='site-calculate-footer'>
          <ButtonGroup
            sx={{ marginTop: '0.5rem' }}
            variant='outlined'
            aria-label='outlined button group'
          >

            <Fab
              onClick={() => dispatch(changeModalVisible(true))}
              color="success"
              disabled={!products.length || !canWeAdd}
            >
              <AttachMoneyIcon />
            </Fab>

            <Fab
              onClick={homeHandle}
              color='primary'
              sx={{margin: '0 3rem'}}
            >
              <Home />
            </Fab>

            <Fab
              onClick={clearProductHandler}
              color="error"
              disabled={!products.length}
            >
            <DeleteIcon />
          </Fab>
          <form>
              <input type="text" pattern="\d*"/>
              <button type="submit">Submit</button>
            </form>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
}

export default CalculateSite;
