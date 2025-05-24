import React, { useEffect, useState } from 'react';

const ResepPage = () => {
  const [resep, setResep] = useState([]);

  useEffect(() => {
    fetch('/data/resep.json')
      .then((res) => res.json())
      .then((data) => setResep(data));
  }, []);

  return (
    <section className="py-12 px-4 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-10">🍲 Resep Sehat</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {resep.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <img src={item.image} alt={item.judul} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">{item.judul}</h3>
            <p className="text-sm text-gray-600">Bahan: {item.bahan}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResepPage;
