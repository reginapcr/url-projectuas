// src/pages/CartPage.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'; // Import ikon yang diperlukan

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  // State untuk mengontrol visibilitas modal konfirmasi
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  // State untuk menyimpan ID produk yang akan dihapus
  const [itemToDeleteId, setItemToDeleteId] = useState(null);
  // State untuk menyimpan nama produk yang akan/sudah dihapus (untuk pesan di modal)
  const [deletedItemName, setDeletedItemName] = useState('');
  // State untuk mengontrol visibilitas modal sukses penghapusan
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    // Cari item yang akan dihapus untuk mendapatkan namanya
    const item = cartItems.find(i => i.id === productId);
    if (item) {
      setItemToDeleteId(productId); // Simpan ID produk yang akan dihapus
      setDeletedItemName(item.name); // Simpan nama produk untuk ditampilkan di modal
      setShowConfirmModal(true); // Tampilkan modal konfirmasi
    }
  };

  const confirmDeletion = () => {
    if (itemToDeleteId) {
      removeFromCart(itemToDeleteId); // Lanjutkan penghapusan item dari keranjang
      setShowConfirmModal(false); // Sembunyikan modal konfirmasi
      setShowDeleteSuccessModal(true); // Tampilkan modal sukses penghapusan
      // Nama produk sudah diset di handleRemoveItem, jadi tidak perlu diset lagi di sini
    }
  };

  const cancelDeletion = () => {
    setShowConfirmModal(false); // Sembunyikan modal konfirmasi
    setItemToDeleteId(null); // Reset ID produk yang akan dihapus
    setDeletedItemName(''); // Reset nama produk
  };

  const closeDeleteSuccessModal = () => {
    setShowDeleteSuccessModal(false); // Sembunyikan modal sukses
    setDeletedItemName(''); // Reset nama produk
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-10 bg-gray-50">
        <p className="text-2xl font-semibold text-gray-600 mb-6">Keranjang Anda kosong.</p>
        <Link to="/product" className="px-8 py-3 bg-red-600 text-white rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-red-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8"> {/* Background merah muda */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 my-10 border border-red-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-8 text-center drop-shadow-sm">
          Keranjang Saya
        </h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-contain rounded-md mr-4 border border-gray-200" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-red-700 font-bold text-lg">Rp {item.price ? item.price.toLocaleString("id-ID") : 'Harga Tidak Tersedia'}</p>
                <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800 transition-colors duration-200 transform hover:scale-110"
                  aria-label={`Hapus ${item.name}`}
                >
                  <FaTrash size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t-2 border-red-200">
          <div className="flex justify-between items-center mb-3">
            <p className="text-lg text-gray-600">Jumlah Produk:</p>
            <span className="text-xl font-bold text-gray-800">
              {cartItems.length}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-800">Total Harga:</h3>
            <span className="text-3xl font-bold text-red-700">
              Rp {getCartTotal().toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/product" className="px-8 py-3 bg-gray-200 text-gray-800 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-md text-center">
            Lanjut Belanja
          </Link>
          <Link to="/checkout" className="px-8 py-3 bg-red-600 text-white rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md text-center">
            Lanjutkan Pembayaran
          </Link>
        </div>

        {/* ========================================================== */}
        {/* Custom Modals */}
        {/* ========================================================== */}

        {/* Confirmation Modal (Yakin Hapus Data?) */}
        {showConfirmModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full transform transition-all duration-300 scale-100 opacity-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Hapus Produk</h3>
                <button onClick={cancelDeletion} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="text-center mb-6">
                <div className="text-red-500 text-5xl mb-4 flex justify-center">
                  <FaExclamationTriangle /> {/* Ikon peringatan */}
                </div>
                <p className="text-lg text-gray-700">Yakin ingin menghapus produk ini dari keranjang?</p>
                {deletedItemName && <p className="text-md text-gray-500 mt-2 font-semibold">"{deletedItemName}"</p>}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={cancelDeletion}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200 ease-in-out shadow-md"
                >
                  Batal
                </button>
                <button
                  onClick={confirmDeletion}
                  className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200 ease-in-out shadow-md"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Notification Modal (Barang Berhasil Dihapus) */}
        {showDeleteSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full transform transition-all duration-300 scale-100 opacity-100">
              <div className="text-red-600 text-6xl mb-4 flex justify-center"> {/* Warna ikon merah */}
                <FaCheckCircle /> {/* Ikon ceklis */}
              </div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Barang Berhasil Dihapus</h2>
              {deletedItemName && <p className="text-gray-600 mb-4">"{deletedItemName}" telah dihapus dari keranjang Anda.</p>}
              <button
                onClick={closeDeleteSuccessModal}
                className="bg-red-600 text-white px-8 py-3 rounded-full text-md font-semibold shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200 ease-in-out"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;