import { ReactNode } from "react";
import './StoreButton.css';

interface IStoreButton {
    children: ReactNode;
}

function StoreButton({ children }: IStoreButton) {
    return(
        <div className="store-button">
            {children}
        </div>
    )
}

export default StoreButton;