// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-sm rounded-xl overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      <figure className="px-6 pt-6">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl h-48 object-cover w-full"
        />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h2 className="card-title text-lg font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
        <p className="text-xl font-bold text-red-600 mt-2">
          Rp {product.price ? product.price.toLocaleString("id-ID") : 'Harga Tidak Tersedia'}
        </p>
        <div className="card-actions mt-4 w-full px-2">
          {/* PERBAIKAN PENTING DI SINI: UBAH "/products/" MENJADI "/product/" */}
          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
          >
            Beli Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;