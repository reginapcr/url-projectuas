import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <section className="bg-green-50 py-12 px-4 md:px-20 text-green-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-4">FreshMart 🥬</h2>
          <p className="text-lg mb-6">
            FreshMart adalah toko online yang menyediakan sayuran segar dan berkualitas tinggi langsung dari petani lokal ke tangan Anda.
            Kami percaya bahwa gaya hidup sehat dimulai dari makanan yang Anda konsumsi setiap hari.
          </p>
          <p className="text-lg mb-6">
            Dengan sistem distribusi yang cepat dan efisien, kami memastikan semua produk kami tetap segar saat sampai di rumah Anda. FreshMart
            juga berkomitmen untuk mendukung pertanian lokal dan menjaga lingkungan melalui praktik ramah lingkungan.
          </p>
          <p className="text-lg mb-6 font-semibold text-green-800">
            Segar. Sehat. Lokal. Itulah FreshMart.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <img src="/img/organic.jpeg" alt="Organic" className="mx-auto w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">100% Organik</h3>
            <p>Kami hanya menyediakan produk yang ditanam secara alami tanpa bahan kimia berbahaya.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <img src="/img/petani.jpeg" alt="Local Farmers" className="mx-auto w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">Dukung Petani Lokal</h3>
            <p>Kami bekerja sama langsung dengan petani di berbagai daerah untuk hasil terbaik.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <img src="/img/delivery.jpeg" alt="Fast Delivery" className="mx-auto w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">Pengiriman Cepat</h3>
            <p>Pesanan Anda akan dikemas dengan baik dan dikirim langsung ke rumah Anda dengan cepat.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
