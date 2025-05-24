import { useState } from "react";
import InputField from "./components/inputField";
import Alert from "./components/Alert";

//state untuk pemanggilan / pendeklrasian
export default function BarangForm() {
  const [namaBarang, setNamaBarang] = useState("");
  const [kategori, setKategori] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [harga, setHarga] = useState("");
  const [tanggalKadaluarsa, setTanggalKadaluarsa] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Data Barang</h2>
        
        <InputField label="Nama Barang" type="text" placeholder="Masukkan nama barang..." onChange={(e) => setNamaBarang(e.target.value)} />
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Kategori Barang</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm" onChange={(e) => setKategori(e.target.value)}>
            <option value="">Pilih Kategori</option>
            <option value="susu">Susu</option>
            <option value="ikan">Ikan</option>
            <option value="sayuran">Sayuran</option>
            <option value="kopi">Kopi</option>
          </select>
        </div>
        
        <InputField label="Jumlah" type="number" placeholder="Masukkan jumlah..." onChange={(e) => setJumlah(e.target.value)} />
        <InputField label="Harga" type="number" placeholder="Masukkan harga..." onChange={(e) => setHarga(e.target.value)} />
        <InputField label="Tanggal Kadaluarsa" type="date" onChange={(e) => setTanggalKadaluarsa(e.target.value)} />
        
        {namaBarang && kategori && jumlah && harga && tanggalKadaluarsa ? ( //Conditional rendering
          <Alert type="info" message="Masukkan Data" />
        ) : (
          <Alert type="error" message="Silakan masukkan data yang valid (tidak boleh kosong)." />
        )}
        
        <button className="w-full bg-green-500 text-white p-3 rounded-lg mt-4 text-lg font-semibold shadow-md hover:bg-green-600 transition duration-300">
          Simpan
        </button>
      </div>
    </div>
  );
}

