export default function Register() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
                Buat Akun FreshMart 🥬
            </h2>

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

                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-green-800 mb-1"
                    >
                        Kata Sandi
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 bg-green-50 border border-green-300 rounded-lg shadow-sm
                            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="********"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-semibold text-green-800 mb-1"
                    >
                        Konfirmasi Kata Sandi
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-2 bg-green-50 border border-green-300 rounded-lg shadow-sm
                            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4
                        rounded-lg transition duration-300"
                >
                    Daftar Sekarang
                </button>
            </form>
        </div>
    );
}
