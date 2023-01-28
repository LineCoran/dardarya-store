import { Button } from "@mui/material";
import { useState } from "react";
import { changePage } from "../../helpers/ChangePage";
import ProductList from "../ProductList/ProductList";
import MyButton from "../UI/MyButton/MyButton";
import './CalculateSite.css'

interface IProduct {
    id: number;
}

interface ICalculateSite {
    site: string;
}

function CalculateSite({ site }: ICalculateSite) {

    const [products, setProduct] = useState<IProduct[]>([]);
    const countProducts = products.length || 0;

    return (
        <section id={site} className="main-page absolute">
        <div className='site-calculate'>
            <h4 className='title title-calc'>
                    {`Количестов товаров: ${countProducts}`}
                </h4>
                <ProductList site={site} products={products} />
                <div className="site-calculate-footer">
                <Button
                  variant="contained"
                  onClick={() => setProduct([...products, { id: products.length+1}])}
                >
                    Добавить товар
                </Button>
            <div className='greeting-button-wrapper greeting-button-wrapper-three'>
                <button className="mybutton mybutton-blue" onClick={() => alert('расчет в разработке')}>Рассчитать</button>
                <MyButton showPage={changePage} page='greeting' text='На главную' color='white'/>
                <button className="mybutton mybutton-red" onClick={() => setProduct([])}>Очистить</button>
            </div>
            </div>
        </div>
    </section>
    )
}

export default CalculateSite;