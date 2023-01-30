import { TextField, InputAdornment } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import Sites from '../../enums/enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeProductStatusSlice, changeProductValue } from '../../store/productSlice';
import './Product.css';

interface IProduct {
  id: number;
  site: Sites;
}

enum KeyOfProduct {
  price = 'price',
  weight = 'weight',
  delivery = 'delivery',
}

function Product({ id, site }: IProduct) {
  const isTaobao = site !== 'taobao';
  const dispatch = useAppDispatch();
  const productStatus = useAppSelector((store) => store.productReducer.product)[site][id].status;

  const [price, setPrice] = useState('');
  const [priceDirty, setPriceDirty] = useState(false);
  const [priceError, setPriceError] = useState(true);

  const [weight, setWeight] = useState('');
  const [weightDirty, setWeightDirty] = useState(false);
  const [weightError, setWeightError] = useState(true);

  const [deliver, setDeliver] = useState('');
  const [deliverDirty, setDeliverDirty] = useState(false);
  const [deliverError, setDeliverError] = useState(true);

  const blurHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'price':
        setPriceDirty(true);
        break;
      case 'deliver':
        setDeliverDirty(true);
        break;
      case 'weight':
        setWeightDirty(true);
        break;
      default:
    }
  };

  function taobaoCheckAllInputs() {
    if ((priceDirty && priceError) || (weightDirty && weightError)) {
      dispatch(changeProductStatusSlice({ id, newStatus: 'error', sites: site }));
    } else if (priceDirty && !priceError && weightDirty && !weightError) {
      dispatch(changeProductStatusSlice({ id, newStatus: 'valid', sites: site  }));
      dispatch(changeProductValue({ id, key: KeyOfProduct.price, value: price, sites: site  }));
      dispatch(changeProductValue({ id, key: KeyOfProduct.weight, value: weight, sites: site }));
    }
  }

  function alibabaCheckAllInputs() {
    if ((priceDirty && priceError) || (deliverDirty && deliverError) || (weightDirty && weightError)) {
      dispatch(changeProductStatusSlice({ id, newStatus: 'error', sites: site  }));
    } else if (priceDirty && !priceError && deliverDirty && !deliverError && weightDirty && !weightError) {
      dispatch(changeProductStatusSlice({ id, newStatus: 'valid', sites: site  }));
      dispatch(changeProductValue({ id, key: KeyOfProduct.price, value: price, sites: site  }));
      dispatch(changeProductValue({ id, key: KeyOfProduct.delivery, value: deliver, sites: site  }));
      dispatch(changeProductValue({ id, key: KeyOfProduct.weight, value: weight, sites: site  }));
    }
  }

  useEffect(() => {
    if (!isTaobao) {
      taobaoCheckAllInputs();
    } else {
      alibabaCheckAllInputs();
    }
  });

  const filterNumber = (value: string) => value.replace(/[^\d.,]/g, '');

  const priceHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const priceString = filterNumber(event.target.value);
    setPrice(priceString);
    if (priceString.length > 0) {
      setPriceError(false);
    } else {
      setPriceError(true);
    }
  };

  const deliverHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const deliverString = filterNumber(event.target.value);
    setDeliver(deliverString);
    if (deliverString.length > 0) {
      setDeliverError(false);
    } else {
      setDeliverError(true);
    }
  };

  const weightHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const weightString = filterNumber(event.target.value);
    const maxWeight = Number(weightString) > 99 ? '99' : weightString;
    setWeight(maxWeight);
    if (maxWeight.length > 0) {
      setWeightError(false);
    } else {
      setWeightError(true);
    }
  };

  return (
    <div className={`product product-${productStatus}`}>
      <p className='product-title'>{`Товар ${id + 1}`}</p>
      <div className='product-inputs'>
        <TextField
          type='number'
          label='Цена выкупа'
          name='price'
          size='small'
          sx={{ m: 1, width: '15ch' }}
          InputProps={{
            startAdornment: <InputAdornment position='start'>&#165;</InputAdornment>,
          }}
          variant='outlined'
          value={price}
          onBlur={blurHandler}
          onChange={priceHandler}
          error={priceError && priceDirty}
        />
        {isTaobao && (
          <TextField
            label='Доставка в Китае'
            size='small'
            id='standard-start-adornment'
            sx={{ m: 1, width: '15ch' }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>&#165;</InputAdornment>,
            }}
            name='deliver'
            variant='outlined'
            value={deliver}
            onBlur={blurHandler}
            onChange={deliverHandler}
            error={deliverError && deliverDirty}
          />
        )}
        <TextField
          label='Вес товара'
          size='small'
          type='number'
          sx={{ m: 1, width: '15ch' }}
          InputProps={{
            startAdornment: <InputAdornment position='start'>кг</InputAdornment>,
          }}
          variant='outlined'
          name='weight'
          value={weight}
          onBlur={blurHandler}
          onChange={weightHandler}
          error={weightError && weightDirty}
        />
      </div>
    </div>
  );
}

export default Product;
