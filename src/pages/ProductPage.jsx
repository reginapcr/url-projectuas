import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import ProductCard from '../components/ProductCard'; // Asumsi ProductCard sudah ada dan diimport
import Footer from '../components/Footer';
import { FaSpinner, FaExclamationCircle, FaArrowLeft } from 'react-icons/fa'; // Tambah ikon untuk kembali

function ProductPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const queryParam = searchParams.get('q');
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => {
        if (!res.ok) throw new Error("Gagal mengambil data produk.");
        return res.json();
      })
      .then(data => {
        setAllProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let products = allProducts;
    if (categoryParam) {
      products = products.filter(
        p => p.category && p.category.toLowerCase() === categoryParam.toLowerCase()
      );
    }
    if (queryParam) {
      const q = queryParam.toLowerCase();
      products = products.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      );
    }
    setFilteredProducts(products);
  }, [allProducts, categoryParam, queryParam]);

  // Fungsi untuk kembali ke halaman produk tanpa filter/pencarian
  const handleClearFilter = () => {
    navigate('/product');
  };

  return (
    <>
      <div className="bg-red-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
        {/* Perubahan di sini: Menggunakan w-full dan menghapus max-w-7xl */}
        <div className="w-full mx-auto space-y-8 bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-red-100">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-800 mb-6 text-center drop-shadow-md">
            Produk {categoryParam ? categoryParam.replace(/_/g, ' ').toUpperCase() : 'Semua Barang'}
          </h1>

          {/* Kondisi untuk menampilkan pesan filter/pencarian dan tombol clear */}
          {(categoryParam || queryParam) && (
            <div className="text-center mb-6">
              <h2 className="text-xl text-gray-700 font-medium mb-3">
                {categoryParam && `Kategori: `}<span className="italic font-semibold text-red-600">{categoryParam ? categoryParam.replace(/_/g, ' ').toUpperCase() : ''}</span>
                {queryParam && ` Hasil Pencarian untuk: `}<span className="italic font-semibold text-red-600">"{queryParam}"</span>
              </h2>
              <button
                onClick={handleClearFilter}
                className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105"
              >
                <FaArrowLeft className="mr-2 -ml-1 h-4 w-4" />
                Lihat Semua Produk
              </button>
            </div>
          )}

          {loading && (
            <div className="flex flex-col justify-center items-center py-20 bg-gray-50 rounded-xl shadow-inner">
              <FaSpinner className="animate-spin h-10 w-10 text-red-600 mb-3" />
              <p className="text-lg text-red-600 font-semibold">Memuat produk...</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col justify-center items-center py-20 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative shadow-md">
              <FaExclamationCircle className="h-8 w-8 mr-3 mb-3" />
              <p className="text-xl font-semibold">Error: {error}</p>
              <p className="text-sm text-red-600 mt-2">Mohon coba muat ulang halaman.</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 bg-red-50 rounded-xl shadow-inner">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-10 bg-white rounded-xl shadow-md border border-gray-100">
                  <p className="text-2xl text-gray-600 italic font-medium">Tidak ada produk ditemukan.</p>
                  <p className="text-md text-gray-500 mt-2">Coba kategori atau kata kunci pencarian lain.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
