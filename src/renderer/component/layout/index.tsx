import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import './index.scss';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className="container">
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
