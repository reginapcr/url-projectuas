import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <section className="bg-gradient-to-r from-red-700 to-red-900 py-12 md:py-16 lg:py-20 overflow-hidden relative">
      {/* Optional: Add subtle background pattern or shapes */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
        {/* Konten Teks */}
        <div className="text-center lg:text-left flex-1 animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">
            Budiman Swalayan <span className="block text-red-200">Pilihan Tepat, Belanja Keluarga.</span>
          </h1>
          <p className="text-base md:text-lg text-white opacity-90 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Temukan beragam pilihan produk segar dan berkualitas tinggi untuk kebutuhan gizi harian Anda. Belanja mudah, hemat, dan nyaman hanya di Budiman Swalayan!
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <Link
              to="/product"
              className="inline-block bg-white text-red-700 px-6 py-2 rounded-full text-base font-semibold shadow-lg hover:bg-gray-100 hover:text-red-800 transition-all duration-300 transform hover:scale-105"
            >
              Lihat Produk Kami
            </Link>
            <Link
              to="/about"
              className="inline-block border-2 border-white text-white px-6 py-2 rounded-full text-base font-semibold shadow-lg hover:bg-white hover:text-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* Gambar */}
        <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right">
          <img
            src="/img/sayuran.jpg" // Pastikan gambar ini ada di public/img/
            alt="Sayuran Segar Budiman Swalayan"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
