import { Footer } from 'components';
import { useTitle } from 'hooks';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '../header/Header';
import s from './layout.module.scss';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children } = props;
  const { title } = useTitle();

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className={s.layout}>
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
