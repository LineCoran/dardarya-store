import { ReactNode } from 'react';
import './Container.css';

interface IContainer {
    children: ReactNode;
}

function Container({ children }: IContainer) {
    return (
        <div className='container'>
            {children}
        </div>
    )
}

export default Container;