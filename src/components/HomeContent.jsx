 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationCircle, FaSpinner, FaStar } from 'react-icons/fa'; // Import ikon untuk error, loading, dan bintang
import { reviewsAPI } from '../service/SupabaseReviewsAPI'; // Import reviewsAPI
import ProductCard from '../components/ProductCard'; // Import komponen ProductCard yang baru

export default function HomeContent() {
  const [produk, setProduk] = useState([]);
  const [reviews, setReviews] = useState([]); // State baru untuk ulasan
  const [loadingProduk, setLoadingProduk] = useState(true); // Loading state untuk produk
  const [loadingReviews, setLoadingReviews] = useState(true); // Loading state untuk ulasan
  const [errorProduk, setErrorProduk] = useState(null); // Error state untuk produk
  const [errorReviews, setErrorReviews] = useState(null); // Error state untuk ulasan

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Produk
      setLoadingProduk(true);
      setErrorProduk(null);
      try {
        const resProduk = await fetch('/data/products.json');
        if (!resProduk.ok) throw new Error("Gagal memuat produk.");
        const dataProduk = await resProduk.json();
        setProduk(dataProduk);
      } catch (err) {
        console.error("Error fetching products for HomeContent:", err);
        setErrorProduk(err.message || "Terjadi kesalahan saat memuat produk.");
      } finally {
        setLoadingProduk(false);
      }
    };

    fetchData();
  }, []);

  // Effect untuk memuat ulasan
  useEffect(() => {
    const loadReviews = async () => {
      setLoadingReviews(true);
      setErrorReviews(null);
      try {
        const data = await reviewsAPI.fetchReviews();
        if (!Array.isArray(data)) {
          throw new Error("Data ulasan yang diterima bukan array.");
        }
        // Urutkan ulasan berdasarkan ID (asumsi ID lebih tinggi berarti lebih baru)
        // Atau tambahkan timestamp di API dan urutkan berdasarkan timestamp
        const sortedReviews = data.sort((a, b) => b.id - a.id);
        setReviews(sortedReviews);
      } catch (err) {
        console.error("Failed to load reviews for HomeContent:", err);
        setErrorReviews("Gagal memuat ulasan. Silakan coba lagi.");
      } finally {
        setLoadingReviews(false);
      }
    };

    loadReviews();
  }, []);

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🥦 KATEGORI */}
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8 text-center drop-shadow-sm">
            KATEGORI PRODUK
          </h2>
          {loadingProduk ? (
            <div className="flex justify-center items-center py-10">
              <FaSpinner className="animate-spin h-8 w-8 text-red-600" />
              <p className="ml-3 text-lg text-red-600">Memuat kategori...</p>
            </div>
          ) : errorProduk ? (
            <div className="flex justify-center items-center py-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative shadow-md">
              <FaExclamationCircle className="h-6 w-6 mr-3" />
              <p className="text-lg">Error: {errorProduk}</p>
            </div>
          ) : (
            <div className="flex gap-6 overflow-x-auto pb-2 px-4 scrollbar-hide">
              {[
                { label: "SAYURAN", icon: "/img/sayuran.jpg" },
                { label: "BUAH", icon: "/img/Buah.jpg" },
                { label: "MINUMAN", icon: "/img/Minuman.jpg" },
                { label: "SEMBAKO", icon: "/img/sembako.jpg" },
                { label: "KOSMETIK", icon: "/img/kosmetik.jpg" },
                { label: "SNACK", icon: "/img/snack.jpg" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={`/product?category=${item.label.toUpperCase()}`}
                  className="flex flex-col items-center justify-center min-w-[150px] md:min-w-[180px] cursor-pointer transition transform hover:scale-105 group"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md border-2 border-gray-200 group-hover:border-red-500 transition-all duration-300 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className={`text-lg font-semibold mt-3 text-gray-800 group-hover:text-red-600 transition-colors duration-300`}
                  >
                    {item.label}
                  </p>
                </Link>
              ))}
              <Link to="/product" className="flex flex-col items-center justify-center min-w-[150px] md:min-w-[180px] cursor-pointer transition transform hover:scale-105 group">
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border-2 border-gray-300 rounded-full bg-gray-50 mb-1 shadow-md group-hover:border-red-500 transition-all duration-300">
                  <p className="text-lg font-semibold text-gray-800 group-hover:text-red-600">Lihat Semua</p>
                </div>
                <p className="text-lg font-semibold text-gray-800 mt-3 group-hover:text-red-600 transition-colors duration-300">Semua Produk</p>
              </Link>
            </div>
          )}
        </section>

        {/* 🛍️ FEATURED PRODUCTS */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8 text-center drop-shadow-sm">
            PRODUK UNGGULAN
          </h2>
          {loadingProduk ? (
            <div className="flex justify-center items-center py-10">
              <FaSpinner className="animate-spin h-8 w-8 text-red-600" />
              <p className="ml-3 text-lg text-red-600">Memuat produk unggulan...</p>
            </div>
          ) : errorProduk ? (
            <div className="flex justify-center items-center py-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative shadow-md">
              <FaExclamationCircle className="h-6 w-6 mr-3" />
              <p className="text-lg">Error: {errorProduk}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Banner 1: Sayuran */}
              <div className="bg-red-200 rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-red-800 mb-2">SAYURAN SEGAR</h3>
                <h2 className="text-3xl font-bold text-red-900 mb-4">DISKON BESAR!</h2>
                <img
                  src="/img/sayurpromo.jpg"
                  alt="Diskon Sayuran"
                  className="h-40 md:h-48 object-contain mx-auto"
                />
                <Link to="/product?category=sayuran" className="mt-4 bg-red-700 text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-red-800 transition-colors duration-300">
                  Belanja Sekarang
                </Link>
              </div>

              {/* Banner 2: Buah */}
              <div className="bg-red-400 rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-2">BUAH SEGAR</h3>
                <h2 className="text-3xl font-bold text-white mb-4">SUPER SALE!</h2>
                <img
                  src="/img/Buah.jpg" // Ganti dengan gambar buah promo jika ada
                  alt="Super Sale Buah"
                  className="h-40 md:h-48 object-contain mx-auto"
                />
                <Link to="/product?category=buah" className="mt-4 bg-white text-red-800 px-6 py-2 rounded-full text-md font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Belanja Sekarang
                </Link>
              </div>

              {/* Banner 3: Minuman */}
              <div className="bg-red-600 rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-2">DISKON HINGGA</h3>
                <h2 className="text-4xl font-bold text-white mb-4">20%</h2>
                <p className="text-lg text-white mb-4">Nikmati Minuman Segar Anda!</p>
                <img
                  src="/img/MinumanPromo.jpg"
                  alt="Diskon Minuman"
                  className="h-40 md:h-48 object-contain mx-auto"
                />
                <Link to="/product?category=minuman" className="mt-4 bg-white text-red-800 px-6 py-2 rounded-full text-md font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Belanja Sekarang
                </Link>
              </div>
            </div>
          )}
        </section>


        {/* 🛒 PRODUK TERBARU */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 drop-shadow-sm">PRODUK</h2>
            <Link to="/product" className="text-red-600 hover:text-red-800 font-semibold text-lg transition-colors duration-300">
              Lihat Semua Produk &rarr;
            </Link>
          </div>

          {loadingProduk ? (
            <div className="flex justify-center items-center py-10">
              <FaSpinner className="animate-spin h-8 w-8 text-red-600" />
              <p className="ml-3 text-lg text-red-600">Memuat produk...</p>
            </div>
          ) : errorProduk ? (
            <div className="flex justify-center items-center py-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative shadow-md">
              <FaExclamationCircle className="h-6 w-6 mr-3" />
              <p className="text-lg">Error: {errorProduk}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {produk.slice(0, 8).map((item) => (
                // Menggunakan komponen ProductCard
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          )}
        </section>

        {/* ⭐ ULASAN PELANGGAN */}
        <section className="bg-red-50 p-8 rounded-2xl shadow-xl border border-red-100">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8 text-center drop-shadow-sm">
            ULASAN PELANGGAN
          </h2>

          {loadingReviews ? (
            <div className="flex justify-center items-center py-10">
              <FaSpinner className="animate-spin h-8 w-8 text-red-600" />
              <p className="ml-3 text-lg text-red-600">Memuat ulasan...</p>
            </div>
          ) : errorReviews ? (
            <div className="flex justify-center items-center py-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative shadow-md">
              <FaExclamationCircle className="h-6 w-6 mr-3" />
              <p className="text-lg">Error: {errorReviews}</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500 italic">
              <p>Belum ada ulasan. Jadilah yang pertama memberikan ulasan di halaman <Link to="/reviews" className="text-red-600 hover:underline">Reviews</Link>!</p>
            </div>
          ) : (
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 space-x-6 scrollbar-hide"> {/* Flex container dengan scroll horizontal */}
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-none w-80 sm:w-96 bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between snap-center transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <div>
                    <div className="flex items-center mb-3">
                      <FaStar className="text-yellow-400 text-xl mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">{review.nama}</h3>
                    </div>
                    <p className="text-gray-700 text-sm italic line-clamp-4">"{review.ulasan}"</p>
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-4">
                    {new Date(review.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
              ))}
            </div>
          )}
          {reviews.length > 0 && ( // Tampilkan tombol "Lihat Semua Ulasan" jika ada ulasan
            <div className="text-center mt-8">
              <Link to="/reviews" className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                Berikan Ulasan
              </Link>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
