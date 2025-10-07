import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';

// Icons for sidebar
const ProductIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /></svg>;
const HomeIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;


const AdminLayout = ({ children }) => {
    const { isDarkMode } = useContext(DarkMode);

    const getLinkClass = ({ isActive }) => {
        const baseClass = "flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors";
        return isActive
            ? `${baseClass} bg-green-600 text-white`
            : `${baseClass} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`;
    };

    return (
        <div className={`min-h-screen flex ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            {/* Sidebar */}
            <aside className={`w-64 flex-shrink-0 p-4 border-r ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <h1 className="text-2xl font-bold text-green-600 mb-8 px-2">Admin Panel</h1>
                <nav className="space-y-2">
                    <NavLink to="/admin/products" className={getLinkClass}>
                        <ProductIcon />
                        <span>Produk</span>
                    </NavLink>
                    <NavLink to="/" className={getLinkClass}>
                        <HomeIcon />
                        <span>Kembali ke Situs</span>
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;