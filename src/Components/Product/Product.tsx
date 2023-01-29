import { TextField, InputAdornment } from "@mui/material";
import { ChangeEvent, useState } from "react";
import './Product.css';

interface IProduct {
    id: number;
    site: string;
}

function Product({ id, site }: IProduct) {
    const isTaobao = site !== 'taobao';

    const [price, setPrice] = useState('');
    const [priceDirty, setPriceDirty] = useState(false);
    const [priceError, setPriceError] = useState(true);

    const blurHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'price':
        setPriceDirty(true);
        break;
      default:
    }
  };

  const priceHandler = (event: any) => {
    const string = event.target.value;
    setPrice(string);
    console.log(setPriceError);
  }

    return(
        <div className="product">
            <p className="product-title">{`Товар ${id}`}</p>
            <div className="product-inputs">
            <TextField
                type='phone'
                label="Цена в юанях"
                name='price'
                onBlur={blurHandler}
                onChange={priceHandler}
                error={priceError && priceDirty}
                size='small'
                value={price}
                sx={{ m: 1, width: '15ch'}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">&#165;</InputAdornment>,
                }}
                variant="outlined"
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
            />
            {isTaobao && <TextField
                label="Цена доставки"
                size="small"
                value={1245}
                id="standard-start-adornment"
                sx={{ m: 1, width: '15ch'}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant='outlined'
            />}
            </div>
        </div>
    )
}

export default Product;