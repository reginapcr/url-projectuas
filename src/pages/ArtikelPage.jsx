import React, { useEffect, useState } from 'react';

const ArtikelPage = () => {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    fetch('/data/artikel.json')
      .then((res) => res.json())
      .then((data) => setArtikel(data));
  }, []);

  return (
    <section className="py-12 px-4 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-10">📚 Artikel Sehat</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {artikel.map((item) => (
          <div key={item.id} className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img src={item.image} alt={item.judul} className="w-full md:w-40 h-40 object-cover rounded-md" />
              <div>
                <h3 className="text-2xl font-bold text-green-700">{item.judul}</h3>
                <p className="text-gray-700 mt-2">{item.isi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtikelPage;
