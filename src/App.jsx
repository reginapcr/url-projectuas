import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";
// import { HiHome } from "react-icons/hi";

// import Orders from "./pages/Orders";
// import NotFound from "./pages/NotFound";
// import MainLayout from "./layouts/MainLayout";
// import Customers from "./pages/Customers";
// import Dashboard from "./pages/Dashboard";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";


// const Dashboard = React.lazy(() => import("./pages/Dashboard"))
// const Orders = React.lazy(() => import("./pages/Orders"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
// const Customers = React.lazy(() => import("./pages/Customers"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"))
const ProductPage = React.lazy(() => import("./pages/ProductPage"))
const Contact = React.lazy(() => import("./pages/Contact"))
const ResepPage = React.lazy(() => import("./pages/ResepPage"))
const ArtikelPage = React.lazy(() => import("./pages/ArtikelPage"))
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<MainLayout/>}>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product-page" element={<ProductPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/resep-page" element={<ResepPage />} />
            <Route path="/artikel-page" element={<ArtikelPage />} />
            <Route path="/products/:id" element={<ProductDetail />} /> 
            </Route>

          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
          </Route>

          </Routes>
          </Suspense>
  )
}

export default App;