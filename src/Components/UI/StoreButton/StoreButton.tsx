import { ReactNode } from 'react';
import './StoreButton.css';

interface IStoreButton {
  children: ReactNode;
  handleClick: () => void;
}

const StoreButton = ({ children, handleClick }: IStoreButton) => {
  return (
    <div>
      <button type={'button'} onClick={handleClick} className={'store-button'}>
        {children}
      </button>
    </div>
  );
};

export default StoreButton;
