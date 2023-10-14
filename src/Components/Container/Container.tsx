import { ReactNode } from 'react';
import './Container.css';

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <div className={'container'}>{children}</div>;
};

export default Container;
