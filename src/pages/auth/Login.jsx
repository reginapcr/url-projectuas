import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Terjadi kesalahan");
        } else {
          setError(err.message || "Kesalahan tidak diketahui");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const errorInfo = error ? (
    <div className="bg-red-100 mb-5 p-4 text-sm font-medium text-red-700 border border-red-300 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="relative bg-green-100 mb-5 p-4 pl-12 text-sm font-medium text-green-800 border border-green-300 rounded-lg shadow-sm flex items-center">
      <span className="absolute left-4 text-lg animate-bounce">🥦</span>
      <ImSpinner2 className="me-2 animate-spin text-green-600 text-base" />
      Sedang menyiapkan kesegaran untuk Anda...
    </div>
  ) : null;
  

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white border border-green-200 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Selamat Datang di FreshMart 🥦
      </h2>
      <p className="text-center text-gray-600 mb-6 text-sm">
        Silakan masuk untuk belanja sayuran segar 🍅
      </p>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-green-800 mb-1">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="you@example.com"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-green-800 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Masuk
        </button>
      </form>
    </div>
  );
}
