// src/App.jsx
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";
import { CartProvider } from './context/CartContext'; // Import CartProvider

// Lazy load your page components
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ResepPage = React.lazy(() => import("./pages/ResepPage"));
const ArtikelPage = React.lazy(() => import("./pages/ArtikelPage"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Reviews = React.lazy(() => import("./pages/Reviews"));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));
const ArtikelDetail = React.lazy(() => import('./pages/ArtikelDetail'));

function App() {
  return (
    <CartProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Rute catch-all harus di akhir agar rute spesifik lainnya tidak tertimpa */}
            <Route path="*" element={<NotFound />} />

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductPage />} /> {/* Path ini sudah benar */}
            <Route path="/Contact" element={<Contact />} />
            <Route path="/resep" element={<ResepPage />} /> {/* Ubah dari "/resep-page" */}
            <Route path="/artikel" element={<ArtikelPage />} /> {/* Ubah dari "/artikel-page" */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/artikel/:id" element={<ArtikelDetail />} />
          </Route>

          {/* Rute untuk AuthLayout berada di luar MainLayout jika tidak menggunakan header/footer yang sama */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
        </Routes>
      </Suspense>
    </CartProvider>
  );
}

export default App;