// ✅ CheckoutPage.jsx — Form + Siklus Pengiriman (with new layout)
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaSpinner, FaMapMarkerAlt, FaCreditCard, FaTruck, FaBoxOpen, FaStar, FaCheckCircle } from 'react-icons/fa'; // Import ikon

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [activeTab, setActiveTab] = useState('delivery'); // 'delivery' or 'payment'
  const [step, setStep] = useState('form'); // 'form', 'processing', 'completed'
  const [formData, setFormData] = useState({
    nama: '',
    phone: '',
    deliveryLocation: 'Pekanbaru, Riau, Indonesia', // Default location
    addressDetail: '',
    catatan: ''
  });
  const [statusIndex, setStatusIndex] = useState(0);
  const [statusProgress, setStatusProgress] = useState([
    { name: 'Dibuat', icon: <FaCheckCircle />, date: '' }, // Tanggal akan diisi dinamis
    { name: 'Dibayar', icon: <FaCreditCard />, date: '', amount: '' }, // Tanggal & jumlah diisi dinamis
    { name: 'Dikirimkan', icon: <FaTruck />, date: '' },
    { name: 'Diterima', icon: <FaBoxOpen />, date: '' },
    { name: 'Dinilai', icon: <FaStar />, date: '' }
  ]);
  const navigate = useNavigate();

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Fungsi untuk mendapatkan URL Google Maps Embed (DIHAPUS KARENA PETA TIDAK DIGUNAKAN)
  // const getMapEmbedUrl = (location) => {
  //   const encodedLocation = encodeURIComponent(location);
  //   const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
  //   return `https://www.google.com/maps/embed/v1/place?q=${encodedLocation}&key=${apiKey}`;
  // };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'delivery') {
      setActiveTab('payment'); // Pindah ke tab pembayaran
    } else {
      // Proses pembayaran (simulasi)
      const now = new Date();
      const formattedDate = now.toLocaleString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      // Update status progress dengan tanggal dan jumlah yang sebenarnya
      setStatusProgress(prevStatus => {
        const updatedStatus = [...prevStatus];
        updatedStatus[0].date = formattedDate; // Dibuat
        updatedStatus[1].date = formattedDate; // Dibayar
        updatedStatus[1].amount = formatCurrency(getCartTotal()); // Jumlah pembayaran
        return updatedStatus;
      });

      setStep('processing'); // Mulai proses pengiriman
      clearCart(); // Clear cart setelah berhasil checkout (dipindahkan ke sini)
    }
  };

  useEffect(() => {
    let interval;
    if (step === 'processing') {
      interval = setInterval(() => {
        setStatusIndex((prev) => {
          if (prev < statusProgress.length - 1) {
            // Update tanggal untuk langkah berikutnya
            setStatusProgress(currentStatus => {
              const newCurrentStatus = [...currentStatus];
              if (newCurrentStatus[prev + 1]) {
                newCurrentStatus[prev + 1].date = new Date().toLocaleString('id-ID', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                });
              }
              return newCurrentStatus;
            });
            return prev + 1;
          } else {
            clearInterval(interval);
            setStep('completed'); // Set step menjadi completed setelah semua status selesai
            return prev;
          }
        });
      }, 1500); // Simulate progress every 1.5 seconds
    }

    // Cleanup function
    return () => clearInterval(interval);
  }, [step, statusProgress.length]); // Tambahkan statusProgress.length sebagai dependency

  // Bagian untuk menyimpan pesanan ke localStorage saat status mencapai 'Dinilai' (completed) DIHAPUS
  // useEffect(() => {
  //   if (step === 'completed') {
  //     const order = {
  //       id: `ORD-${Date.now()}`,
  //       date: new Date().toLocaleString('id-ID', {
  //         day: '2-digit',
  //         month: '2-digit',
  //         year: 'numeric',
  //         hour: '2-digit',
  //         minute: '2-digit'
  //       }),
  //       items: cartItems,
  //       total: getCartTotal(),
  //       formData: formData,
  //       statusHistory: statusProgress
  //     };

  //     const existingOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];
  //     localStorage.setItem('orderHistory', JSON.stringify([...existingOrders, order]));
  //     clearCart();
  //   }
  // }, [step, cartItems, getCartTotal, formData, statusProgress, clearCart]);


  if (cartItems.length === 0 && step === 'form') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Keranjang Anda kosong.</h2>
        <button
          onClick={() => navigate('/product')}
          className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Kembali ke Belanja
        </button>
      </div>
    );
  }

  return (
    <div className="bg-red-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 my-10 border border-red-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-8 text-center drop-shadow-sm">
          Checkout Pesanan
        </h1>

        {step === 'form' ? (
          <>
            {/* Tabs */}
            <div className="border-b-2 border-gray-200 mb-8">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('delivery')}
                  className={`whitespace-nowrap py-4 px-1 border-b-4 font-semibold text-lg focus:outline-none transition-colors duration-300
                    ${activeTab === 'delivery'
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  Alamat Pengiriman
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`whitespace-nowrap py-4 px-1 border-b-4 font-semibold text-lg focus:outline-none transition-colors duration-300
                    ${activeTab === 'payment'
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  Pembayaran
                </button>
              </nav>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column: Form Fields */}
                <div className="space-y-6">
                  {activeTab === 'delivery' && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Lengkapi Alamat Pengiriman</h3>
                      <div>
                        <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">Nama Pelanggan <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          name="nama"
                          id="nama"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
                          value={formData.nama}
                          onChange={handleChange}
                          required
                          placeholder="Masukkan nama lengkap Anda"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">No Telepon / Handphone <span className="text-red-500">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Contoh: 081234567890"
                        />
                      </div>
                      <div>
                        <label htmlFor="deliveryLocation" className="block text-sm font-medium text-gray-700 mb-1">Lokasi Pengiriman <span className="text-red-500">*</span></label>
                        {/* Input lokasi tetap ada, tapi tanpa peta di bawahnya */}
                        <input
                          type="text"
                          name="deliveryLocation"
                          id="deliveryLocation"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          required
                          placeholder="Contoh: Jl. Sudirman No. 10, Pekanbaru"
                        />
                      </div>
                      <div>
                        <label htmlFor="addressDetail" className="block text-sm font-medium text-gray-700 mb-1">Detail Alamat <span className="text-red-500">*</span></label>
                        <textarea
                          name="addressDetail"
                          id="addressDetail"
                          rows="3"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 resize-none"
                          value={formData.addressDetail}
                          onChange={handleChange}
                          required
                          placeholder="Contoh: Blok A No. 15, samping pos satpam"
                        ></textarea>
                      </div>
                    </>
                  )}

                  {activeTab === 'payment' && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Informasi Pembayaran</h3>
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative shadow-md" role="alert">
                        <strong className="font-bold">Total Pembayaran: </strong>
                        <span className="block sm:inline text-xl font-semibold">{formatCurrency(getCartTotal())}</span>
                      </div>
                      {/* Payment methods */}
                      <div className="space-y-3 bg-gray-50 p-4 rounded-md shadow-sm border border-gray-100">
                        <p className="text-lg font-semibold text-gray-800 mb-2">Pilih Metode Pembayaran:</p>
                        <div>
                          <input type="radio" id="bca" name="paymentMethod" value="bca" className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300" defaultChecked />
                          <label htmlFor="bca" className="text-gray-700 font-medium">Transfer Bank (BCA)</label>
                        </div>
                        <div>
                          <input type="radio" id="mandiri" name="paymentMethod" value="mandiri" className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300" />
                          <label htmlFor="mandiri" className="text-gray-700 font-medium">Transfer Bank (Mandiri)</label>
                        </div>
                        <div>
                          <input type="radio" id="gopay" name="paymentMethod" value="gopay" className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300" />
                          <label htmlFor="gopay" className="text-gray-700 font-medium">GoPay</label>
                        </div>
                        <div>
                          <input type="radio" id="ovo" name="paymentMethod" value="ovo" className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300" />
                          <label htmlFor="ovo" className="text-gray-700 font-medium">OVO</label>
                        </div>
                        {/* Metode pembayaran baru: COD */}
                        <div>
                          <input type="radio" id="cod" name="paymentMethod" value="cod" className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300" />
                          <label htmlFor="cod" className="text-gray-700 font-medium">Cash On Delivery (COD)</label>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="catatan" className="block text-sm font-medium text-gray-700 mb-1">Catatan (opsional)</label>
                        <textarea
                          name="catatan"
                          id="catatan"
                          rows="2"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 resize-none"
                          value={formData.catatan}
                          onChange={handleChange}
                          placeholder="Contoh: Jangan lupa bawang merah!"
                        ></textarea>
                      </div>
                    </>
                  )}

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105"
                    >
                      {activeTab === 'delivery' ? 'Lanjutkan ke Pembayaran' : 'Bayar Sekarang'}
                    </button>
                  </div>
                </div>

                {/* Right Column: Shopping Details */}
                <div className="bg-red-50 p-6 rounded-2xl shadow-lg border border-red-200">
                  <h3 className="text-2xl font-bold text-red-800 mb-6">Detail Belanja Anda</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-red-100">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">No</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">Nama Barang</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">Jumlah</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">Harga</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {cartItems.length > 0 ? (
                          cartItems.map((item, index) => (
                            <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700 font-semibold">{formatCurrency(item.price)}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">Keranjang belanja kosong.</td>
                          </tr>
                        )}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="3" className="px-6 py-4 text-right text-base font-bold text-gray-900">Total Belanja</td>
                          <td className="px-6 py-4 whitespace-nowrap text-base font-bold text-red-700">{formatCurrency(getCartTotal())}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </form>
          </>
        ) : (
          // Existing Delivery Status UI
          <>
            <h2 className="text-3xl font-bold text-red-800 text-center mb-8 drop-shadow-sm">Status Pengiriman Pesanan</h2>
            <div className="flex justify-between items-center relative py-6 px-4 bg-white rounded-xl shadow-lg border border-red-100">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 mx-8">
                  <div
                      className="h-full bg-red-500 transition-all duration-500 ease-in-out"
                      style={{ width: `${(statusIndex / (statusProgress.length - 1)) * 100}%` }}
                  ></div>
              </div>

              {statusProgress.map((status, idx) => (
                <div
                  key={status.name}
                  className={`flex flex-col items-center z-10`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 text-2xl
                      ${idx <= statusIndex ? 'bg-red-500 border-red-500 text-white' : 'bg-white border-gray-300 text-gray-500'}`}
                  >
                    {status.icon}
                  </div>
                  <div className={`mt-3 text-center text-sm ${idx <= statusIndex ? 'text-red-700 font-semibold' : 'text-gray-500'}`}>
                    <p className="whitespace-nowrap">{status.name}</p>
                    {status.amount && idx === statusIndex && ( // Display amount only for 'Dibayar' when active
                      <p className="whitespace-nowrap font-bold text-xs">({status.amount})</p>
                    )}
                    {idx <= statusIndex && status.date && ( // Display date for active and past steps
                      <p className="text-xs text-gray-500">{status.date}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              {/* Tombol akan selalu kembali ke beranda setelah simulasi selesai */}
              <button
                onClick={() => navigate('/')}
                className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Kembali ke Beranda
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
