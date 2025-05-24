import React from 'react';

const categories = [
  { name: 'Brokoli Hijau', image: '/img/foto4.jpg' },
  { name: 'Wortel', image: '/img/foto5.jpg' },
  { name: 'Bayam', image: '/img/foto6.jpg' },
  { name: 'Tomat', image: '/img/foto7.jpg' },
  { name: 'Kembang Kol', image: '/img/kembangkol.jpeg' },
  { name: 'Sawi Hijau', image: '/img/fotosawi.jpeg' },
];

const HomeContent = () => {
  return (
    <section className="p-8 text-center bg-white">
      <h2 className="text-3xl font-bold mb-10 text-green-800">CATEGORY</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center bg-green-50 rounded-2xl p-4 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-300"
            />
            <p className="font-semibold text-green-700 text-lg">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeContent;
