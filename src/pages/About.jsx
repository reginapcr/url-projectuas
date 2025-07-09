import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <> {/* Menggunakan Fragment karena Header dan Footer sudah ada di luar div utama */}
       {/* Pastikan Header ada jika Anda ingin menampilkannya di halaman About */}
      <div className="bg-white min-h-screen"> {/* Container utama halaman */}
        {/* Section Hero/Intro - Latar Belakang Merah */}
        <section className="bg-red-600 text-white py-16 px-4 md:px-8 lg:px-16 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-down">Budiman Swalayan 🛒</h1>
            <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up">Pilihan Tepat, Belanja Keluarga.</p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 animate-fade-in-up delay-200">
              Menyediakan kebutuhan harian Anda dengan kualitas terbaik dan harga bersahabat.
            </p>
          </div>
        </section>

        {/* Section Sejarah Kami */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center border-b-2 border-red-500 pb-4">Sejarah Kami</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Budiman Swalayan didirikan pada tahun 1999 oleh H. Yasmar. Awalnya, toko ini merupakan toko barang harian bernama <strong>"Budiman"</strong> yang berlokasi di Jalan Soekarno Hatta No. 26, Pasar Bawah, Kota Bukittinggi. Seiring waktu, toko ini berkembang menjadi Budiman Swalayan dengan luas area mencapai 240 m².
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Pada tahun 2004, didirikan toko cabang di Pasar Aur Kuning, Bukittinggi yang beroperasi hingga 2010. Kemudian, toko ini direlokasi ke tanah dan bangunan milik sendiri di Jalan Sutan Syahrir No. 4, Tarok Dipo, Bukittinggi, dan menjadi Budiman Swalayan.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Ekspansi terus dilakukan. Tahun 2013, Budiman Swalayan hadir di Jalan Sawahan No. 30, Kota Padang dengan luas 1.000 m². Dua tahun kemudian, cabang baru dibuka di Jalan Pondok No. 105–107, Padang dengan luas 600 m².
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Tahun 2017, dua cabang baru berdiri: di Jalan Rimbo Data No. 22, Cengkeh, Kota Padang (800 m²), dan di Jalan By Pass, Pulai Anak Air, Bukittinggi. Lokasi terakhir ini menggantikan cabang sebelumnya di Batang Agam yang telah beroperasi sejak 2007.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Tahun 2018, Budiman Swalayan membuka cabang di Jalan Prof. Dr. Hamka No. 1, Komplek Unand, Air Tawar, Kota Padang (800 m²), serta di Jalan Soekarno Hatta No. 9–12, Parit Antang, Kota Payakumbuh (600 m²).
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Ekspansi berlanjut hingga tahun 2019 dengan cabang baru di Jl. Alai Timur No. 44B, Alai Parak Kopi, Kota Padang. Pada 2020, Budiman membuka tiga cabang sekaligus di tiga kota: Jl. Gajah Mada No. 40, Padang; Jalan Raya Bukittinggi–Medan, Gadut, Kabupaten Agam; dan Jl. Soekarno Hatta, Daya Bangun, Payakumbuh.
            </p>
          </div>
        </section>

        {/* Section Fitur/Keunggulan */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center border-b-2 border-red-500 pb-4">Mengapa Memilih Budiman Swalayan?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1: Belanja Keluarga */}
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-red-500 flex items-center justify-center">
                  <img src="/img/ft1.jpg" alt="Family Shopping" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-red-700 mb-3">Belanja Keluarga</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Budiman Swalayan hadir untuk memenuhi kebutuhan belanja keluarga dengan harga terjangkau dan pilihan produk yang lengkap.
                </p>
              </div>

              {/* Card 2: Pertumbuhan Konsisten */}
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-red-500 flex items-center justify-center">
                  <img src="/img/ft2.jpg" alt="Growth" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-red-700 mb-3">Pertumbuhan Konsisten</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Dari satu toko sederhana, Budiman terus berkembang dengan membuka cabang-cabang baru di berbagai kota, menunjukkan komitmen kami.
                </p>
              </div>

              {/* Card 3: Jaringan Luas */}
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-red-500 flex items-center justify-center">
                  <img src="/img/ft3.jpg" alt="Multiple Locations" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-red-700 mb-3">Jaringan Luas</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Toko kami kini tersebar di berbagai lokasi strategis di Bukittinggi, Padang, dan Payakumbuh untuk menjangkau lebih banyak pelanggan.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer /> {/* Pastikan Footer ada jika Anda ingin menampilkannya di halaman About */}
    </>
  );
};

export default About;