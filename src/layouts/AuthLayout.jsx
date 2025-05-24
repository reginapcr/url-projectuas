import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-green-200">
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-4xl font-poppins font-extrabold text-green-700">
                        <span className="text-green-700">Fresh</span>
                        <span className="text-green-500">Mart 🥬</span>
                    </h1>
                </div>

                <Outlet />

                <p className="text-center text-sm text-gray-500 mt-6">
                    © 2025 FreshMart. All rights reserved.
                </p>
            </div>
        </div>
    );
}
