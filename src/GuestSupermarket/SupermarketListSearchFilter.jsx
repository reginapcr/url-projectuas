import { useState } from "react";
import menuData from "./framework.json"; //pemanggilan data dari framework.json

export default function SupermarketListSearchFilter() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");

  const filtered = menuData.filter(item => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchTag = tag === "" || item.tags.includes(tag);
    return matchSearch && matchTag;
  });

  const allTags = [...new Set(menuData.flatMap(m => m.tags))];

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        🛒 Supermarket Sehat
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Cari sayuran..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Semua Tag</option>
          {allTags.map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        {filtered.map(item => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden w-full"
          >
            <a href={item.image} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </a>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-center bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md w-full"
              >
                Beli di Supermarket
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
