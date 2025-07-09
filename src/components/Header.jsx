// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'; // Import ikon keranjang

import { useCart } from '../context/CartContext'; // Import useCart hook

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { getTotalItems, getCartTotal } = useCart(); // Dapatkan data dari context

  const profileRef = useRef(null); // Hanya perlu ref untuk dropdown yang dikontrol state manual

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuClass = ({ isActive }) =>
    `text-lg transition-colors ${
      isActive ? "text-red-900 underline" : "text-red-700 hover:text-red-900"
    }`;

  return (
    <header className="flex justify-between items-center p-4 bg-red-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/img/budiman.png" alt="Budiman Swalayan Logo" className="w-25 h-10" />
        <div className="text-2xl font-bold text-red-800">Budiman Swalayan</div>
      </div>

      {/* Navigasi */}
      <nav className="flex space-x-6">
        <NavLink to="/" className={menuClass}>Home</NavLink>
        <NavLink to="/about" className={menuClass}>About</NavLink>
        <NavLink to="/product" className={menuClass}> {/* <--- Pastikan ini mengarah ke ProductPage */}
          Products
        </NavLink>
        <NavLink to="/artikel" className={menuClass} id="menu-artikel">Artikel</NavLink>
        {/* <NavLink to="/contact" className={menuClass} id="menu-contact">Contact</NavLink> */}
        <NavLink to="/reviews" className={menuClass}>Reviews</NavLink>
      </nav>

      {/* Notifikasi, Keranjang, dan Profil */}
      <div className="flex items-center space-x-6 relative">
        {/* Keranjang (Cart) dengan Dropdown DaisyUI */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle relative text-red-700"
            style={{ fontSize: "28px" }}
          >
            <FaShoppingCart className="h-6 w-6" /> {/* Menggunakan ikon React */}
            {/* Badge Kuantitas Item Keranjang */}
            {getTotalItems() > 0 && (
              <span className="indicator-item bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold -top-1 -right-1 absolute">
                {getTotalItems()} {/* <--- Dinamis dari context */}
              </span>
            )}
          </div>
          {/* Konten Dropdown Keranjang */}
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{getTotalItems()} Items</span>
              <span className="text-info">Subtotal: Rp {getCartTotal().toLocaleString('id-ID')}</span>
              <div className="card-actions">
                <Link to="/cart" className="btn btn-primary btn-block bg-red-600 hover:bg-red-700 text-white">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Profil */}
        <div ref={profileRef} className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            aria-label="User Profile"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full overflow-hidden border-2 border-red-500">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User avatar"
                className="object-cover w-full h-full"
              />
            </div>
          </button>
          {profileOpen && (
            <ul className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-2 menu menu-sm">
              <li>
                <a href="#profile" className="justify-between">
                  Profile
                  <span className="badge badge-xs bg-red-500 text-white">New</span>
                </a>
              </li>
              <li><a href="#settings">Settings</a></li>
              <li><a href="#logout">Logout</a></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;