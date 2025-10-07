import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../context/DarkMode';

const UnauthorizedPage = () => {
    const { isDarkMode } = useContext(DarkMode);

    const LockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    );

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center text-center px-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            <div className={`max-w-md w-full p-8 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex justify-center">
                    <LockIcon />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Akses Ditolak</h1>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Maaf, Anda tidak memiliki izin untuk mengakses halaman ini.
                </p>
                <Link 
                    to="/" 
                    className="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
};

export default UnauthorizedPage;