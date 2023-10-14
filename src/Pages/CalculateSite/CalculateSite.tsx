import { ButtonGroup, Fab } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Home from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ProductList from '../../Components/ProductList/ProductList';
import { clearProducts } from '../../store/productSlice';
import { changeModalVisible } from '../../store/modalSlice';
import { Pages } from '../../core/Pages';
import './CalculateSite.css';
import Sites from '../../enums/enums';

interface ICalculateSite {
  site: Sites;
}

export const CalculateSite = ({ site }: ICalculateSite) => {
  const products = useAppSelector((store) => store.productReducer.product[site]);
  const dispatch = useAppDispatch();
  const countProducts = products.length || 0;
  const navigate = useNavigate();
  const handleClickMain = () => navigate(Pages.Main);

  // Очищаем все продукты
  const clearProductHandler = () => {
    dispatch(clearProducts(site));
  };

  function checkCanWeAdd() {
    if (products.length === 0) return true;
    return products.every((product) => product.status === 'valid');
  }

  const canWeAdd = checkCanWeAdd();

  return (
    <section id={site} className={'main-page absolute'}>
      <div className={'site-calculate'}>
        <h4 className={'title title-calc'}>{`Количество товаров: ${countProducts}`}</h4>
        <ProductList site={site} products={products} canWeAdd={canWeAdd} />

        <div className={'site-calculate-footer'}>
          <ButtonGroup
            sx={{ marginTop: '0.5rem' }}
            variant={'outlined'}
            aria-label={'outlined button group'}
          >
            <Fab
              onClick={() => dispatch(changeModalVisible(true))}
              color={'success'}
              disabled={!products.length || !canWeAdd}
            >
              <AttachMoneyIcon />
            </Fab>

            <Fab onClick={handleClickMain} color={'primary'} sx={{ margin: '0 3rem' }}>
              <Home />
            </Fab>

            <Fab onClick={clearProductHandler} color={'error'} disabled={!products.length}>
              <DeleteIcon />
            </Fab>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
};
