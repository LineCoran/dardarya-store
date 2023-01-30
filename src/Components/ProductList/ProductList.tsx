import { Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../hooks';
import { addProduct } from '../../store/productSlice';
import Product from '../Product/Product';
import './ProductList.css';
import Sites from '../../enums/enums';

type ProductType = {
  id: number;
};

interface IProductList {
  products: ProductType[];
  site: Sites;
  canWeAdd: boolean;
}

function ProductList({ products, site, canWeAdd }: IProductList) {
  const dispatch = useAppDispatch();

  const addProductHandler = () => {
    dispatch(addProduct(site));
  };
    return (
      <div className='product-list-wrapper'>
        <div className='product-list'>
          {(products.length) 
          ? products.map((product) => (
            <Product site={site} key={product.id} id={product.id} />
          ))
          : <></>
        }
        </div>
        <Fab
            onClick={addProductHandler}
            color="primary"
            aria-label="add"
            disabled={!canWeAdd}
            sx={{marginTop: '0.5rem'}}
          >
            <AddIcon />
          </Fab>
      </div>
    );
  } 

export default ProductList;
