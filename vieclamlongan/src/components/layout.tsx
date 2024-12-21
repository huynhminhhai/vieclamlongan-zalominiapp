import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './navigation';

const Layout = () => {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
};

export default Layout