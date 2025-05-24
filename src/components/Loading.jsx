export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-green-50">
            <div className="relative mb-6">
                <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin shadow-lg"></div>
                <span className="absolute top-0 left-0 animate-bounce text-2xl">🥬</span>
                <span className="absolute bottom-0 right-0 animate-ping text-2xl">🍅</span>
            </div>
            <p className="text-green-700 text-lg font-semibold">Segar-segar sedang disiapkan...</p>
        </div>
    );
}
