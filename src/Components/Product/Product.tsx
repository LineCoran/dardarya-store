import { TextField, InputAdornment } from "@mui/material";
import './Product.css';

interface IProduct {
    id: number;
    site: string;
}

function Product({ id, site }: IProduct) {
    const isTaobao = site !== 'taobao';

    return(
        <div className="product">
            <p className="product-title">{`Товар ${id}`}</p>
            <div className="product-inputs">
            <TextField
                type='number'
                label="Цена в юанях"
                size='small'
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