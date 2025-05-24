import React, { useEffect, useState } from 'react';

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="p-6 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">🌿 Pilihan Sayuran Segar</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-green-800 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Segar & Organik</p>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                Rp {product.price.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListProduct;
