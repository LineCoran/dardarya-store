import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import './Product.css';

interface IProduct {
    id: number;
}

function Product({ id }: IProduct) {

    const [valueChina, setValueChina] = useState<number>(0)

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
            </div>
        </div>
    )
}

export default Product;