import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner, FaExclamationCircle } from 'react-icons/fa';

const ArtikelPage = () => {
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('/data/artikel.json');
        if (!res.ok) throw new Error(`Gagal mengambil data artikel: ${res.statusText}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Format data artikel tidak valid.");
        setArtikel(data);
      } catch (err) {
        console.error("Error fetching artikel:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtikel();
  }, []);

  return (
    <section className="bg-red-50 min-h-screen py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 text-center mb-12 drop-shadow-md">
          📚 Artikel Kesehatan Budiman Swalayan
        </h2>

        {loading && (
          <div className="flex justify-center items-center py-10">
            <FaSpinner className="animate-spin h-8 w-8 text-red-600" />
            <p className="ml-3 text-lg text-red-600">Memuat artikel...</p>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center py-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative shadow-md">
            <FaExclamationCircle className="h-6 w-6 mr-3" />
            <p className="text-lg">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-10">
            {artikel.length > 0 ? (
              artikel.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-red-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:scale-[1.005]"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img
                      src={item.image}
                      alt={item.judul}
                      className="w-full md:w-56 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-red-700 mb-3 leading-tight">{item.judul}</h3>
                      <p className="text-gray-700 leading-relaxed text-base line-clamp-4">
                        {item.isi.length > 250 ? item.isi.slice(0, 250) + '...' : item.isi}
                      </p>
                      <Link
                        to={`/artikel/${item.id}`}
                        className="mt-4 inline-flex items-center text-red-600 hover:text-red-800 font-semibold"
                      >
                        Baca Selengkapnya
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500 italic">
                <p>Tidak ada artikel ditemukan.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtikelPage;
