// src/components/Layouts/AdminLayout.jsx

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import ThemeToggle from '../Elements/Toggle/ThemeToggle';

// Icons
const ProductIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /></svg>;
const DashboardIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const ArrowLeftIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>;


const AdminLayout = ({ children }) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    const getLinkClass = ({ isActive }) => {
        const baseClass = "flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors";
        return isActive
            ? `${baseClass} bg-green-600 text-white`
            : `${baseClass} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`;
    };

    const animationStyles = `
        .animate-gradient-flow { background: linear-gradient(90deg, #F64920, #FFBD3A, #F64920); background-size: 200% auto; color: transparent; -webkit-background-clip: text; background-clip: text; animation: gradient-flow 6s linear infinite; }
        @keyframes gradient-flow { from { background-position: 0% center; } to { background-position: -200% center; } }
    `;

    return (
        <>
            <style>{animationStyles}</style>
            <div className={`min-h-screen flex ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
                {/* Sidebar */}
                <aside className={`w-64 flex-shrink-0 p-4 border-r ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="px-2 mb-8">
                        <Link to="/" className="inline-block mb-4 text-gray-500 hover:text-green-500" aria-label="Kembali ke Beranda">
                            <ArrowLeftIcon />
                        </Link>
                        <h1 className="text-2xl font-extrabold">
                            <span className="animate-gradient-flow">videobelajar</span>
                        </h1>
                    </div>
                    <nav className="space-y-2">
                         <NavLink to="/admin/products" end className={getLinkClass}>
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink to="/admin/products/manage" className={getLinkClass}>
                            <ProductIcon />
                            <span>Manajemen Produk</span>
                        </NavLink>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    <header className="flex justify-end items-center mb-6">
                        <div className="flex items-center gap-4">
                            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white">
                                A
                            </div>
                        </div>
                    </header>
                    {children}
                </main>
            </div>
        </>
    );
};

export default AdminLayout;