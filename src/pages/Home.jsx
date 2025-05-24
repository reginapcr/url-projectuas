import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Herosection from '../components/Herosection';
import HomeContent from '../components/HomeContent';
import Product from '../components/Product';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
    
      <Sidebar />
      <Herosection />
      <HomeContent />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;