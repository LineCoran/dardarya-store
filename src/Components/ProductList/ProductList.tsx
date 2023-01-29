import { Button } from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { addProduct } from '../../store/productSlice';
import Product from '../Product/Product';
import './ProductList.css';

type ProductType = {
  id: number;
};

interface IProductList {
  products: ProductType[];
  site: string;
  canWeAdd: boolean;
}

function ProductList({ products, site, canWeAdd }: IProductList) {
  const dispatch = useAppDispatch();

  const addProductHandler = () => {
    dispatch(addProduct(true));
  };

  if (products.length) {
    return (
      <div className='product-list-wrapper'>
        <div className='product-list'>
          {products.map((product) => (
            <Product site={site} key={product.id} id={product.id} />
          ))}
        </div>
        <Button
          variant='contained'
          sx={{
            marginTop: '0.5rem',
          }}
          size='medium'
          onClick={addProductHandler}
          disabled={!canWeAdd}
        >
          Добавить
        </Button>
      </div>
    );
  }
  return (
    <div className='product-list-wrapper'>
      <div className='product-list' />
      <Button
        variant='contained'
        sx={{
          marginTop: '0.5rem',
        }}
        size='medium'
        onClick={addProductHandler}
        disabled={!canWeAdd}
      >
        Добавить
      </Button>
    </div>
  );
}

export default ProductList;
