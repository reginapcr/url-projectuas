import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams dan Link
import productsData from './data/products.json'; // Import data dummy sayuran Anda

const ProductDetailPage = () => {
  const { id } = useParams(); // Mengambil nilai 'id' dari parameter URL. Contoh: jika URL /product/1, maka id akan menjadi "1"
  const productId = parseInt(id); // Mengubah string ID menjadi integer untuk pencarian

  // Mencari produk di data lokal berdasarkan ID
  const product = productsData.find(p => p.id === productId); //

  // Jika produk tidak ditemukan (misalnya, ID yang dimasukkan di URL tidak valid)
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Produk tidak ditemukan!</h2>
        <p className="text-gray-600 mb-6">Maaf, sayuran yang Anda cari tidak ada dalam daftar kami.</p>
        <Link to="/" className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200">
          Kembali ke Daftar Produk
        </Link>
      </div>
    );
  }

  // Jika produk ditemukan, tampilkan detailnya
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <main className="flex-grow max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Detail Produk Sayuran</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0">
            <img
              src={product.image} // Menggunakan properti 'image' dari data lokal
              alt={product.name} // Menggunakan properti 'name' dari data lokal
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex-grow text-gray-800">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2> {/* */}
            <p className="text-xl font-bold text-emerald-600 mb-4">Rp {product.price.toLocaleString('id-ID')}</p> {/* */}
            <p className="text-md leading-relaxed">
              Ini adalah detail untuk **{product.name}**. Sayuran segar ini tersedia dengan harga terjangkau.
              Kaya akan vitamin dan serat, cocok untuk gaya hidup sehat Anda.
              (Anda bisa menambahkan deskripsi lebih lanjut di sini jika data JSON punya properti deskripsi)
            </p>
            <div className="mt-6">
              {/* Link untuk kembali ke halaman daftar produk */}
              <Link to="/" className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors duration-200">
                Kembali ke Daftar Produk
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;