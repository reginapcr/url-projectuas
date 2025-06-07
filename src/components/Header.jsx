// import React from 'react';
import { FaBell, FaUserCircle } from "react-icons/fa"; // Menggunakan React Icons untuk notifikasi dan profil
import { NavLink } from "react-router-dom";
import { MdFastfood } from "react-icons/md";


const Header = () => {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      {/* Logo FreshMart dengan gambar */}
      <div className="flex items-center space-x-2">
        <img
          src="/img/fotoLogo.jpeg"
          alt="FreshMart Logo"
          className="w-10 h-10"
        />{" "}
        {/* Logo FreshMart */}
        <div className="text-2xl font-bold text-green-700">FreshMart</div>
      </div>

      {/* Navigasi */}
      <nav className="flex space-x-6 text-lg">
        <NavLink id="menu1" to="/" className={menuClass}>
          Home
        </NavLink>
        <NavLink id="menu2" to="/about" className={menuClass}>
          About
        </NavLink>

        <NavLink id="menu-4" to="/product-page" className={menuClass}>
          <MdFastfood className="mr-4 text-xl" />
          Products
        </NavLink>

        <NavLink id="menu4" to="/resep-page" className={menuClass}>
          Resep
        </NavLink>
        <NavLink id="menu5" to="/artikel-page" className={menuClass}>
          Artikel
        </NavLink>
        <NavLink id="menu6" to="/contact" className={menuClass}>
          Contact
        </NavLink>
      </nav>

      {/* Profil dan Notifikasi */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          {/* Ikon notifikasi */}
          <FaBell className="text-2xl text-green-700 cursor-pointer" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>{" "}
          {/* Indikator notifikasi */}
        </div>
        <FaUserCircle className="text-3xl text-green-700 cursor-pointer" />{" "}
        {/* Ikon Profil */}
      </div>
    </header>
  );
};

export default Header;
