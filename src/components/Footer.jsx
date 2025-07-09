// import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Bagian atas footer */}
      {/* Changed background to soft red, and footer titles to red-800 */}
      <footer className="footer sm:footer-horizontal bg-red-100 text-gray-700 p-10">
        <nav>
          <h6 className="footer-title text-red-800">Layanan Pelanggan</h6>
          <a className="link link-hover" href="/contact">
            Bantuan
          </a>{" "}
          {/* Ganti dengan link ke halaman bantuan/FAQ */}
          <a className="link link-hover" href="/reviews">
            Ulasan Produk
          </a>
          <a className="link link-hover" href="/artikel">
            Tips Belanja & Resep
          </a>{" "}
          {/* Gabungkan konten relevan dari Artikel & Resep */}
        </nav>
        <nav>
          <h6 className="footer-title text-red-800">Perusahaan</h6>
          <a className="link link-hover" href="/about">
            Tentang Kami
          </a>
          <a className="link link-hover" href="/contact">
            Kontak Kami
          </a>
          {/* Link untuk Karir atau Media Kit bisa ditambahkan kembali jika di masa depan diperlukan */}
        </nav>
        <nav>
          {/* Mengubah footer-title dari 'Legal' menjadi 'Informasi Kontak' */}
          <h6 className="footer-title text-red-800">Informasi Kontak</h6>
          {/* Menambahkan detail kontak seperti yang Anda minta */}
          <p className="mb-3">
            <strong>📍 Alamat:</strong> Jl. Sehat No. 123, Pekanbaru
          </p>
          <p className="mb-3">
            <strong>📞 Telepon:</strong> (0761) 123456
          </p>
          <p className="mb-3">
            <strong>✉️ Email:</strong> support@freshmart.com
          </p>
          <p>
            <strong>🕒 Jam Operasional:</strong> Senin - Sabtu, 08.00 - 17.00
          </p>
        </nav>
      </footer>

      {/* Bagian bawah footer */}
      {/* Changed background to soft red, border to red, and icon colors to red */}
      <footer className="footer bg-red-100 text-gray-600 border-t border-red-300 px-10 py-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current text-red-700" // Changed icon color
          >
            {/* The actual SVG path is not provided, so keeping it as is */}
            <path d="M22.672 15.226...z"></path>
          </svg>
          <p>
            BudimanSwalayan <br />
            Menyediakan bahan segar sejak 2025.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {/* Twitter */}
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-red-700"
              >
                {" "}
                {/* Changed icon color */}
                <path d="M24 4.557c-..." />
              </svg>
            </a>
            {/* YouTube */}
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-red-700"
              >
                {" "}
                {/* Changed icon color */}
                <path d="M19.615 3.184c-..." />
              </svg>
            </a>
            {/* Facebook */}
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-red-700"
              >
                {" "}
                {/* Changed icon color */}
                <path d="M9 8h-3v4..." />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
