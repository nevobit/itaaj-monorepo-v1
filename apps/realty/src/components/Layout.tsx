import { NextPage } from 'next';
import React from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
