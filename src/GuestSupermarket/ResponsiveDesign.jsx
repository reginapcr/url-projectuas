export default function ResponsiveDesign() {
    return (
      <div className="p-8">
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
          Coba lakukan zoom in atau ubah ukuran layar. Ukuran teks akan menyesuaikan.
        </p>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="bg-pink-300 w-full md:w-1/2 p-4">Kolom 1</div>
          <div className="bg-purple-300 w-full md:w-1/2 p-4">Kolom 2</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-pink-400 p-4">Box 1</div>
          <div className="bg-pink-400 p-4">Box 2</div>
          <div className="bg-pink-400 p-4">Box 3</div>
          <div className="bg-pink-400 p-4">Box 4</div>
        </div>
      </div>
    );
  }
  