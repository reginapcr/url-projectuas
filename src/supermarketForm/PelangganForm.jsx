import { useState } from "react";
import InputField from "./components/inputField";
import Alert from "./components/Alert";

export default function MemberForm() {
  const [namaMember, setNamaMember] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [tanggalBergabung, setTanggalBergabung] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Data Member</h2>
        
        <InputField label="Nama Member" type="text" placeholder="Masukkan nama member..." onChange={(e) => setNamaMember(e.target.value)} />
        <InputField label="Nomor Telepon" type="tel" placeholder="Masukkan nomor telepon..." onChange={(e) => setNomorTelepon(e.target.value)} />
        <InputField label="Tanggal Bergabung" type="date" onChange={(e) => setTanggalBergabung(e.target.value)} />
        {namaMember && nomorTelepon && tanggalBergabung ? (
    <Alert type="info" message="Masukkan Data" />
  ) : (
    <Alert type="error" message="Silakan masukkan data yang valid (tidak boleh kosong)." />
  )}
        <button className="w-full bg-green-500 text-white p-3 rounded-lg mt-4 text-lg font-semibold shadow-md hover:bg-green-600 transition duration-300">
          Simpan
        </button>
      </div>
    </div>
  );
}
