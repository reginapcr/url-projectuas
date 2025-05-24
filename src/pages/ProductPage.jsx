import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import Herosection from '../components/Herosection';
// import HomeContent from '../components/HomeContent';
// import Product from '../components/Product';
import Footer from '../components/Footer';
import ListProduct from '../components/ListProduct';

const ProductPage = () => {
  return (
    <div>
      <Sidebar />
      <ListProduct/>
      <Footer />
    </div>
  );
};

export default ProductPage;