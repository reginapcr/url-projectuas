import React from 'react';

const Herosection = () => {
  return (
    <section className="relative text-white text-center h-[600px]">
      {/* Bagian atas dengan overlay hijau gradasi */}
      <div className="h-1/2 bg-gradient-to-b from-green-700 to-green-900 flex items-center justify-center text-center z-10">
        <div className="px-6 md:max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-shadow-xl">
            Sayur Segar
          </h1>
          <p className="mb-6 text-lg md:text-xl font-light tracking-wide text-shadow-xl">
            We provide curated, nutrient-rich products for your healthy lifestyle.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold mb-6 hover:bg-green-100 transition-all duration-300 transform hover:scale-110 shadow-xl">
            Pilihan laiannya
          </button>
        </div>
      </div>

      {/* Bagian bawah dengan gambar sayuran */}
      <div
        className="h-1/2 bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: "url('/img/sayuran.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </section>
  );
};

export default Herosection;
