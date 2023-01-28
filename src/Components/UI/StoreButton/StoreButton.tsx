import { ReactNode } from "react";
import './StoreButton.css';

interface IStoreButton {
    children: ReactNode;
    site: string;
    showPage: (value: string) => void;
}

function StoreButton({ children, site, showPage }: IStoreButton) {
    return(
        <div onClick={() => showPage(site)} className="store-button">
            {children}
        </div>
    )
}

export default StoreButton;