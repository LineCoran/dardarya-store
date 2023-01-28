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
                label="Цена в юанях"
                id="standard-start-adornment"
                sx={{ m: 1, width: '25ch'}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">&#165;</InputAdornment>,
                }}
                variant="standard"
                placeholder="Цена в юанях"
            />
            <TextField
                label="Вес товара в килограммах"
                id="standard-start-adornment"
                sx={{ m: 1, width: '25ch'}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">кг</InputAdornment>,
                }}
                variant="standard"
                placeholder="Вес товара"
            />
            {isTaobao && <TextField
                label="Стоимость доставки"
                id="standard-start-adornment"
                sx={{ m: 1, width: '25ch'}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant="standard"
                placeholder="Доставка"
            />}
            </div>
        </div>
    )
}

export default Product;