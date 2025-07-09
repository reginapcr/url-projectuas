import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ArtikelDetail = () => {
  const { id } = useParams();
  const [artikel, setArtikel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const res = await fetch('/data/artikel.json');
        if (!res.ok) throw new Error("Gagal memuat data artikel.");
        const data = await res.json();
        const found = data.find((item) => item.id.toString() === id);
        if (!found) throw new Error("Artikel tidak ditemukan.");
        setArtikel(found);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArtikel();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-red-600">Memuat artikel...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">Error: {error}</p>;

  return (
    <section className="bg-white min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/artikel" className="text-red-600 hover:text-red-800 flex items-center mb-6">
          <FaArrowLeft className="mr-2" /> Kembali ke Artikel
        </Link>
        <h1 className="text-4xl font-bold text-red-800 mb-6">{artikel.judul}</h1>
        <img
          src={artikel.image}
          alt={artikel.judul}
          className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
        />
        <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">{artikel.isi}</p>
      </div>
    </section>
  );
};

export default ArtikelDetail;
