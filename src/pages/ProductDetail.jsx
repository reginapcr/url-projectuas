import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart hook kita
import { FaCheckCircle, FaSpinner, FaExclamationCircle } from 'react-icons/fa'; // Import ikon

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State baru untuk modal
  const [addedItemName, setAddedItemName] = useState(''); // State untuk menyimpan nama produk yang ditambahkan

  // Dapatkan fungsi addToCart dari CartContext
  const { addToCart: addItemToCart } = useCart(); // Rename untuk menghindari konflik nama

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch dari public/data/products.json
        const res = await fetch('/data/products.json');
        if (!res.ok) throw new Error("Gagal mengambil data produk.");
        const data = await res.json();
        const found = data.find(p => String(p.id) === id); // Pastikan perbandingan string
        if (found) setProduct(found);
        else setError("Produk tidak ditemukan.");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const changeQuantity = (delta) => setQuantity(q => Math.max(1, q + delta));

  const handleAddToCart = () => {
    if (product) {
      // Panggil fungsi addItemToCart dari context
      addItemToCart(product, quantity);
      setAddedItemName(product.name); // Set nama produk yang ditambahkan
      setShowSuccessModal(true); // Tampilkan modal
      setQuantity(1); // Reset kuantitas setelah ditambahkan ke keranjang
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false); // Sembunyikan modal
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen py-6 bg-gray-50"> {/* py-8 -> py-6 */}
      <FaSpinner className="animate-spin h-7 w-7 text-red-600" /> {/* h-8 w-8 -> h-7 w-7 */}
      <p className="ml-2 text-base text-red-600">Memuat detail produk...</p> {/* ml-3 text-lg -> ml-2 text-base */}
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen py-6 bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-lg relative shadow-md"> {/* py-8 -> py-6, px-4 py-3 -> px-3 py-2 */}
      <FaExclamationCircle className="h-5 w-5 mr-2" /> {/* h-6 w-6 -> h-5 w-5, mr-3 -> mr-2 */}
      <p className="text-base">Error: {error}</p> {/* text-lg -> text-base */}
    </div>
  );

  if (!product) return (
    <div className="text-center py-6 min-h-screen bg-gray-50 text-gray-600"> {/* py-8 -> py-6 */}
      <p className="text-base">Produk tidak ditemukan.</p> {/* text-lg -> text-base */}
    </div>
  );

  return (
    <div className="bg-red-50 min-h-screen py-6 px-3 sm:px-4 lg:px-6"> {/* py-8 -> py-6, px-4 sm:px-6 lg:px-8 -> px-3 sm:px-4 lg:px-6 */}
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-red-50 rounded-xl shadow-lg p-4 md:p-5 my-6 border border-red-200 flex flex-col md:flex-row-reverse gap-4 md:gap-5"> {/* max-w-3xl -> max-w-2xl, rounded-2xl -> rounded-xl, shadow-xl -> shadow-lg, p-5 md:p-6 -> p-4 md:p-5, my-8 -> my-6, ADDED md:flex-row-reverse */}
        {/* Detail Produk (Kolom Kanan) */}
        <div className="md:w-1/2 space-y-3 flex flex-col justify-center"> {/* space-y-4 -> space-y-3 */}
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 leading-tight"> {/* text-3xl lg:text-3xl -> text-2xl lg:text-3xl */}
            {product.name}
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed"> {/* text-base -> text-sm */}
            {product.description}
          </p>
          <p className="text-xl text-red-700 font-bold"> {/* text-2xl -> text-xl */}
            Rp {product.price.toLocaleString('id-ID')}
          </p>

          <div className="flex items-center gap-2 mt-2"> {/* gap-3 -> gap-2, mt-3 -> mt-2 */}
            <span className="text-sm font-semibold text-gray-700">Jumlah:</span> {/* text-base -> text-sm */}
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm">
              <button
                onClick={() => changeQuantity(-1)}
                className="px-2.5 py-0.5 font-bold text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed" // px-3 py-1 -> px-2.5 py-0.5, text-base -> text-sm
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                readOnly
                value={quantity}
                className="w-10 text-center text-sm font-semibold border-x border-gray-300 focus:outline-none" // w-12 -> w-10, text-base -> text-sm
              />
              <button
                onClick={() => changeQuantity(1)}
                className="px-2.5 py-0.5 font-bold text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200" // px-3 py-1 -> px-2.5 py-0.5, text-base -> text-sm
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1.5" // mt-5 -> mt-4, py-2 px-5 -> py-2 px-4, text-base -> text-base, gap-2 -> gap-1.5
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* w-5 h-5 -> w-4 h-4 */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Masukkan Keranjang
          </button>
        </div>

        {/* Gambar Produk (Kolom Kiri) */}
        <div className="md:w-1/2 flex justify-center items-center p-2 bg-gray-100 rounded-lg shadow-inner"> {/* p-3 -> p-2, rounded-xl -> rounded-lg */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-64 object-contain rounded-md shadow-sm transform transition-transform duration-300 hover:scale-105" // max-h-72 -> max-h-64, rounded-lg -> rounded-md, shadow-md -> shadow-sm
          />
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-3"> {/* p-4 -> p-3 */}
          <div className="bg-white p-5 rounded-lg shadow-xl text-center max-w-xs w-full transform transition-all duration-300 scale-100 opacity-100"> {/* p-6 -> p-5 */}
            <div className="text-red-600 text-4xl mb-2 flex justify-center"> {/* text-5xl -> text-4xl, mb-3 -> mb-2 */}
              <FaCheckCircle />
            </div>
            <h2 className="text-lg font-bold mb-3 text-gray-800">Berhasil Ditambahkan!</h2> {/* text-xl -> text-lg, mb-4 -> mb-3 */}
            {addedItemName && <p className="text-xs text-gray-600 mb-2">"{addedItemName}" telah ditambahkan ke keranjang Anda.</p>} {/* text-sm -> text-xs, mb-3 -> mb-2 */}
            <button
              onClick={handleCloseModal}
              className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200 ease-in-out" // px-6 py-2.5 -> px-5 py-2, text-base -> text-sm
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
