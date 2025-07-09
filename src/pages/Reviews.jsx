import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa"; // Import ikon yang diperlukan
import { reviewsAPI } from "../service/SupabaseReviewsAPI"; // Pastikan path ini benar dan tidak dikomentari!

export default function Reviews() {
  const [dataForm, setDataForm] = useState({
    nama: "",
    ulasan: "",
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  // States untuk modal kustom
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successModalMessage, setSuccessModalMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
    // Clear error related to input on change if any modal is open
    if (showErrorModal) setShowErrorModal(false);
  };

  // Submit new review
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!dataForm.nama.trim() || !dataForm.ulasan.trim()) {
      setErrorModalMessage("Nama dan ulasan tidak boleh kosong.");
      setShowErrorModal(true);
      return;
    }

    try {
      setSubmitLoading(true);
      setErrorModalMessage('');
      setShowErrorModal(false);
      setSuccessModalMessage('');
      setShowSuccessModal(false);

      console.log("Mengirim data:", dataForm);
      // --- PERBAIKAN DI SINI: Mengaktifkan kembali pemanggilan API Supabase ---
      await reviewsAPI.createReview(dataForm); 
      // await new Promise(resolve => setTimeout(resolve, 1000)); // Hapus atau komentari baris simulasi ini
      // Jika Anda ingin menguji error, uncomment baris di bawah ini:
      // throw new Error("Simulasi gagal menyimpan review.");

      setSuccessModalMessage("Review berhasil ditambahkan! Terima kasih atas ulasan Anda.");
      setShowSuccessModal(true);
      setDataForm({ nama: "", ulasan: "" }); // Reset form
      // loadReviews() tidak lagi dipanggil di sini karena daftar review tidak ditampilkan di halaman ini
    } catch (err) {
      console.error("Error createReview:", err.message || err);
      setErrorModalMessage("Gagal menyimpan review. Mohon coba lagi nanti.");
      setShowErrorModal(true);
    } finally {
      setSubmitLoading(false);
    }
  };

  // Tutup modal sukses
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setSuccessModalMessage('');
  };

  // Tutup modal error
  const closeErrorModal = () => {
    setShowErrorModal(false);
    setErrorModalMessage('');
  };

  return (
    <div className="bg-red-50 min-h-screen py-10 px-4"> {/* Background merah muda */}
      <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-red-100"> {/* Container form terpusat */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-10 text-center drop-shadow-md">
          Berikan Ulasan Anda
        </h2>

        {/* Form Tambah Review */}
        <div className="flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nama" className="sr-only">Nama</label>
              <input
                name="nama"
                id="nama"
                value={dataForm.nama}
                onChange={handleChange}
                placeholder="Nama Anda"
                required
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-red-400 focus:border-red-400 outline-none transition duration-200 ease-in-out placeholder-gray-400"
                disabled={submitLoading}
                aria-label="Nama Anda"
              />
            </div>
            <div>
              <label htmlFor="ulasan" className="sr-only">Ulasan</label>
              <textarea
                name="ulasan"
                id="ulasan"
                value={dataForm.ulasan}
                onChange={handleChange}
                placeholder="Tulis ulasan Anda di sini..."
                required
                rows="4"
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 resize-none focus:ring-red-400 focus:border-red-400 outline-none transition duration-200 ease-in-out placeholder-gray-400"
                disabled={submitLoading}
                aria-label="Ulasan Anda tentang produk"
              />
            </div>
            <button
              type="submit"
              disabled={submitLoading || !dataForm.nama.trim() || !dataForm.ulasan.trim()}
              className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {submitLoading ? (
                <>
                  <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Mengirim...
                </>
              ) : (
                "Simpan Review"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* ========================================================== */}
      {/* Custom Modals */}
      {/* ========================================================== */}

      {/* Success Notification Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full transform transition-all duration-300 scale-100 opacity-100">
            <div className="text-green-500 text-6xl mb-4 flex justify-center">
              <FaCheckCircle />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Berhasil!</h2>
            {successModalMessage && <p className="text-gray-600 mb-4">{successModalMessage}</p>}
            <button
              onClick={closeSuccessModal}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Error Notification Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full transform transition-all duration-300 scale-100 opacity-100">
            <div className="text-red-500 text-6xl mb-4 flex justify-center">
              <FaTimesCircle />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Terjadi Kesalahan!</h2>
            {errorModalMessage && <p className="text-gray-600 mb-4">{errorModalMessage}</p>}
            <button
              onClick={closeErrorModal}
              className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200 ease-in-out"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
