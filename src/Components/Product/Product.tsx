import { TextField, InputAdornment } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeProductStatusSlice } from "../../store/productSlice";
import './Product.css';

interface IProduct {
    id: number;
    site: string;
}

function Product({ id, site }: IProduct) {
    const isTaobao = site !== 'taobao';
    const dispatch = useAppDispatch();
    const productStatus = useAppSelector((store) => store.productReducer.product)[id].status;

    const [price, setPrice] = useState('');
    const [priceDirty, setPriceDirty] = useState(false);
    const [priceError, setPriceError] = useState(true);

    const [weight, setWeight] = useState('');
    const [weightDirty, setWeightDirty] = useState(false);
    const [weightError, setWeightError] = useState(true);

    const [deliver, setDeliver] = useState('');
    const [delivertDirty, setDeliverDirty] = useState(false);
    const [deliverError, setDeliverError] = useState(true);

    const blurHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'price':
        setPriceDirty(true);
        break;
      case 'weight':
        setWeightDirty(true);
        break;
      case 'deliver':
        setDeliverDirty(true);
        break;
      default:
    }
  };

  useEffect(() => {
    if (!isTaobao) {
      taobaoCheckAllInputs()
    } else {
      alibabaCheckAllInputs()
    }
    
  })


  function taobaoCheckAllInputs() {
    if ((priceDirty && priceError) || (weightDirty && weightError)) {
      dispatch(changeProductStatusSlice({id, newStatus: 'error'}));
  } else {
    if ((priceDirty && !priceError) && (weightDirty && !weightError)) {
      dispatch(changeProductStatusSlice({id, newStatus: 'valid'}));
    }
  }
  }

  function alibabaCheckAllInputs() {
    if ((priceDirty && priceError) || (weightDirty && weightError) || (delivertDirty && deliverError)) {
      dispatch(changeProductStatusSlice({id, newStatus: 'error'}));
  } else {
    if ((priceDirty && !priceError) && (weightDirty && !weightError) && (delivertDirty && !deliverError)) {
      dispatch(changeProductStatusSlice({id, newStatus: 'valid'}));
    }
  }
  }

  const filterNumber = (value: string) => {
    return value.replace(/[^+\d]/g, '');
  }

  const priceHandler = (event: any) => {
    const price = filterNumber(event.target.value)
    setPrice(price);
    if (price.length > 0) {
        setPriceError(false);
    } else {
        setPriceError(true);
    }
  }

  const weightHandler = (event: any) => {
    const weight = filterNumber(event.target.value)
    setWeight(weight);
    if (weight.length > 0) {
        setWeightError(false);
    } else {
        setWeightError(true);
    }
  }

  const deliverHandler = (event: any) => {
    const deliver = filterNumber(event.target.value)
    setDeliver(deliver);
    if (deliver.length > 0) {
        setDeliverError(false);
    } else {
        setDeliverError(true);
    }
  }

    return(
        <div className={`product product-${productStatus}`}>
            <p className="product-title">{`Товар ${id + 1}`}</p>
            <div className="product-inputs">
            <TextField
                type='number'
                label="Цена в юанях"
                name='price'
                size='small'
                sx={{ m: 1, width: '15ch'}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">&#165;</InputAdornment>,
                }}
                variant="outlined"
                value={price}
                onBlur={blurHandler}
                onChange={priceHandler}
                error={priceError && priceDirty}

            />
            <TextField
                label="Вес товара"
                size='small'
                type='number'
                sx={{ m: 1, width: '15ch'}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">кг</InputAdornment>,
                }}
                variant='outlined'
                name='weight'
                value={weight}
                onBlur={blurHandler}
                onChange={weightHandler}
                error={weightError && weightDirty}
            />
            {isTaobao && <TextField
                label="Цена доставки"
                size="small"
                id="standard-start-adornment"
                sx={{ m: 1, width: '15ch'}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                name='deliver'
                variant='outlined'
                value={deliver}
                onBlur={blurHandler}
                onChange={deliverHandler}
                error={deliverError && delivertDirty}
            />}
            </div>
        </div>
    )
}

export default Product;