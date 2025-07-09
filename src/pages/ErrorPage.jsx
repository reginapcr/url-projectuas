// import React from 'react';
import { useNavigate } from 'react-router-dom';

const errorDetails = {
  400: {
    title: '400 - Bad Request',
    message: 'Permintaan tidak valid. Silakan periksa kembali data Anda.',
  },
  401: {
    title: '401 - Unauthorized',
    message: 'Anda tidak memiliki akses. Silakan login untuk melanjutkan.',
  },
  403: {
    title: '403 - Forbidden',
    message: 'Anda tidak diizinkan untuk mengakses halaman ini.',
  },
  404: {
    title: '404 - Not Found',
    message: 'Halaman yang Anda cari tidak ditemukan.',
  },
};

const ErrorPage = ({ kode }) => {
  const navigate = useNavigate();
  const error = errorDetails[kode] || {
    title: 'Oops!',
    message: 'Terjadi kesalahan.',
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 text-center p-6">
      <h1 className="text-6xl font-bold text-green-700 mb-4">{error.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{error.message}</p>
      <button
        onClick={() => navigate('/')}
        className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default ErrorPage;
