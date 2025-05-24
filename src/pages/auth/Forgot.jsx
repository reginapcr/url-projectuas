export default function Forgot() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">
                Lupa Kata Sandi?
            </h2>

            <p className="text-sm text-gray-600 mb-6 text-center">
                Masukkan alamat email kamu dan kami akan kirimkan tautan untuk mengatur ulang kata sandi.
            </p>

            <form>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-green-800 mb-1"
                    >
                        Alamat Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-green-50 border border-green-300 rounded-lg shadow-sm
                            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="you@example.com"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4
                        rounded-lg transition duration-300"
                >
                    Kirim Tautan Reset
                </button>
            </form>
        </div>
    );
}
