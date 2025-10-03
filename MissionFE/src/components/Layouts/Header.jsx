import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';

const Header = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    // Kode CSS untuk animasi gradien ditempatkan di sini
    const animationStyles = `
        .animate-gradient-flow {
            background: linear-gradient(90deg, #F64920, #FFBD3A, #F64920);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: gradient-flow 6s linear infinite;
        }

        @keyframes gradient-flow {
            from {
                background-position: 0% center;
            }
            to {
                background-position: -200% center;
            }
        }
    `;

    return (
        <>
            {/* Tag <style> ini akan menerapkan animasi ke komponen */}
            <style>{animationStyles}</style>

            <header className={`sticky top-0 z-50 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <div className="container mx-auto flex justify-between items-center p-4">
                    {/* === PERUBAHAN PADA LOGO DI SINI === */}
                    <Link to="/" className="text-2xl font-extrabold">
                        <span className="animate-gradient-flow">
                            videobelajar
                        </span>
                    </Link>
                    {/* ==================================== */}

                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/about" className="hover:text-yellow-500">About</Link>
                        <Link to="/products" className="hover:text-yellow-500">Course</Link>
                        <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">Masuk</Link>
                        <Link to="/register" className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600">Daftar</Link>
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                            {isDarkMode ? '🌞' : '🌜'}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;