import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import ikon

const Contact = () => {
  return (
    <> {/* Menggunakan Fragment sebagai root element */}
      <Sidebar />

      <section className="bg-gradient-to-br from-red-50 to-red-100 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-6 drop-shadow-md">
            Hubungi Budiman Swalayan
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Kami selalu siap membantu Anda. Jangan ragu untuk menghubungi kami melalui informasi di bawah ini.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-left">
            {/* Informasi Kontak */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-200 transform transition-all duration-300 hover:scale-[1.01]">
              <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">Informasi Kontak Kami</h3>
              <ul className="space-y-5 text-gray-800 text-lg">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-red-600 text-2xl mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Alamat Kantor:</strong>
                    Jl. Sehat No. 123, Pekanbaru, Riau, Indonesia
                  </div>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-red-600 text-2xl mr-4 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Telepon:</strong>
                    (0761) 123456
                  </div>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-red-600 text-2xl mr-4 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Email:</strong>
                    support@budimanswalayan.com
                  </div>
                </li>
                <li className="flex items-center">
                  <FaClock className="text-red-600 text-2xl mr-4 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">Jam Operasional:</strong>
                    Senin - Sabtu, 08.00 - 17.00 WIB
                  </div>
                </li>
              </ul>
            </div>

            {/* Peta Lokasi & Media Sosial */}
            <div className="space-y-10">
              {/* Peta Lokasi */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200 transform transition-all duration-300 hover:scale-[1.01]">
                <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">Lokasi Kami</h3>
                
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative shadow-inner">
                  {/* Placeholder untuk peta. Dalam aplikasi nyata, gunakan Google Maps Embed atau library peta */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127669.68825531703!2d101.30568265914917!3d0.4809466147865597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5aff682091ca3%3A0x6b93111d999119a9!2sBudiman%20Swalayan%20Arifin%20Ahmad!5e0!3m2!1sen!2sid!4v1751935578558!5m2!1sen!2sid"
                    alt="Map Placeholder"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-md text-sm text-gray-700 shadow-md">
                    Budiman Swalayan, Jl. Sehat No. 123, Pekanbaru
                  </div>
                </div>
              </div>

              {/* Media Sosial */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200 transform transition-all duration-300 hover:scale-[1.01]">
                <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">Ikuti Kami</h3>
                <div className="flex justify-center space-x-6">
                  <a href="https://facebook.com/budimanswalayan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110">
                    <FaFacebook size={40} />
                  </a>
                  <a href="https://twitter.com/budimanswalayan" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110">
                    <FaTwitter size={40} />
                  </a>
                  <a href="https://instagram.com/budimanswalayan" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110">
                    <FaInstagram size={40} />
                  </a>
                  <a href="https://linkedin.com/company/budimanswalayan" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition transform hover:scale-110">
                    <FaLinkedin size={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;