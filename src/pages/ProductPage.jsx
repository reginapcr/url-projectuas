import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link untuk navigasi
import productsData from "../data/products.json"; // Import data dummy sayuran Anda
import { BsFillExclamationDiamondFill } from "react-icons/bs";

const ProductPage = () => {
  const [query, setQuery] = useState("");
  // filteredProducts akan menyimpan daftar produk yang ditampilkan (hasil pencarian)
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Efek ini akan berjalan setiap kali 'query' berubah
  useEffect(() => {
    if (query.trim() === "") {
      // Jika query kosong, tampilkan semua produk dari data lokal
      setFilteredProducts(productsData); 
    } else {
      // Jika ada query, filter produk berdasarkan nama
      const lowercasedQuery = query.toLowerCase();
      const filtered = productsData.filter(item => //
        item.name.toLowerCase().includes(lowercasedQuery) //
      );
      setFilteredProducts(filtered);
    }
  }, [query]);

  // Ini bisa dihapus jika Anda tidak lagi memiliki error yang tidak terdefinisi dari API eksternal
  const errorInfo = null; // Karena kita menggunakan data lokal, error dari axios tidak relevan di sini.

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header bisa ditambahkan di sini kalau dibutuhkan */}
      {/* <Header /> */}
      {errorInfo}

      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto mt-10 overflow-x-auto rounded-2xl shadow-lg bg-white">
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari sayuran (contoh: Brokoli, Wortel)..."
            className="mb-4 p-3 w-full bg-white rounded-2xl shadow-lg"
          />

          {/* Kondisi untuk menampilkan pesan jika tidak ada produk atau query kosong */}
          {filteredProducts.length === 0 && query.trim() !== "" && (
            <p className="text-center py-4 text-gray-500">Tidak ada sayuran ditemukan untuk "{query}".</p>
          )}
          {filteredProducts.length === 0 && query.trim() === "" && (
            <p className="text-center py-4 text-gray-500">Daftar sayuran kosong. (Ini seharusnya tidak terjadi jika products.json terisi)</p>
          )}

          {/* Tabel produk hanya ditampilkan jika ada produk yang difilter */}
          {filteredProducts.length > 0 && (
            <table className="min-w-full divide-y divide-gray-200 text-lg">
              <thead>
                <tr className="bg-emerald-600 text-white text-left text-xl font-semibold">
                  <th className="px-6 py-4">#</th>
                  <th className="px-6 py-4">Id</th>
                  <th className="px-6 py-4">Nama Sayuran</th>
                  <th className="px-6 py-4">Harga</th>
                  <th className="px-6 py-4">Gambar</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 text-xl text-gray-800">
                {filteredProducts.map((item, index) => ( // Menggunakan filteredProducts untuk mapping
                  <tr
                    key={item.id} // Gunakan id sebagai key yang unik
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {index + 1}.
                    </td>
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">
                      {/* Menggunakan komponen Link untuk navigasi ke halaman detail */}
                      {/* URL akan menjadi /product/1 (untuk Brokoli) atau /product/2 (untuk Wortel) dll. */}
                      <Link to={`/product/${item.id}`} className="text-blue-600 hover:underline">
                        {item.name} {/* */}
                      </Link>
                    </td>
                    <td className="px-6 py-4">Rp {item.price.toLocaleString('id-ID')}</td> {/* */}
                    <td className="px-6 py-4">
                      <img
                        src={item.image} //
                        alt={item.name} //
                        className="w-20 h-20 object-cover rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Footer (jika di-uncomment) */}
      {/*
      <footer className="w-full">
        <Footer />
      </footer>
      */}
    </div>
  );
};

export default ProductPage;