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
                <ProductList products={products} />
            <div className='greeting-button-wrapper greeting-button-wrapper-three'>
                <button className="mybutton mybutton-blue" onClick={() => alert('расчет в разработке')}>Рассчитать</button>
                <button className="mybutton mybutton-white" onClick={() => setProduct([...products, { id: products.length+1}])}>Добавить</button>
                <button className="mybutton mybutton-red" onClick={() => setProduct([])}>Очистить</button>
            </div>
        </div>
    </section>
    )
}

export default CalculateSite;