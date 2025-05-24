import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Sidebar />

      <section className="bg-green-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Hubungi FreshMart</h2>
          <p className="text-gray-700 mb-12">Kami siap membantu Anda dengan pertanyaan atau masukan mengenai produk kami.</p>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            {/* Informasi Kontak */}
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Informasi Kontak</h3>
              <p className="mb-3"><strong>📍 Alamat:</strong> Jl. Sehat No. 123, Pekanbaru</p>
              <p className="mb-3"><strong>📞 Telepon:</strong> (0761) 123456</p>
              <p className="mb-3"><strong>✉️ Email:</strong> support@freshmart.com</p>
              <p><strong>🕒 Jam Operasional:</strong> Senin - Sabtu, 08.00 - 17.00</p>
            </div>

            {/* Form Kontak */}
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Kirim Pesan</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <textarea
                  rows="4"
                  placeholder="Pesan Anda"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
