// import React from 'react';

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Beras Premium 5kg",
      description: "Beras berkualitas tinggi, cocok untuk kebutuhan harian.",
       image: '/img/beras.jpg', // gambar beras
    },
    {
      id: 2,
      name: "Minyak Goreng 2L",
      description: "Minyak goreng sehat dan bersih untuk memasak sehari-hari.",
      image: "/img/minyak.jpg", // gambar minyak
    },
    {
      id: 3,
      name: "Gula Pasir 1kg",
      description: "Gula pasir putih halus, cocok untuk campuran minuman dan kue.",
      image: "/img/gula.jpg", // gambar gula
    },
    {
      id: 4,
      name: "Telur Ayam 1kg",
      description: "Telur segar dari peternakan lokal.",
      image: "/img/telur.jpg", // gambar telur
    },
    {
      id: 5,
      name: "Sayur Bayam",
      description: "Bayam segar, kaya nutrisi dan baik untuk kesehatan.",
      image: "/img/bayam.jpeg", // gambar bayam
    },
    {
      id: 6,
      name: "Susu UHT 1L",
      description: "Susu segar UHT cocok untuk keluarga.",
      image: "/img/susu.jpg", // gambar susu
    },
  ];

  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-green-800 text-center">Produk Supermarket</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 w-80 shadow-sm rounded-xl">
            <figure className="px-6 pt-6">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl h-48 object-cover w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary w-full">Beli Sekarang</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
