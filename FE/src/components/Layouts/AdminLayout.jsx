

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import ThemeToggle from '../Elements/Toggle/ThemeToggle';


const ProductIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /></svg>;
const DashboardIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const ArrowLeftIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>;
const SunIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> );
const MoonIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> );
const MenuIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;


const AdminLayout = ({ children }) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [username, setUsername] = useState('');
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar
    const profileTimeoutRef = useRef(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUsername(storedUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    const handleProfileMouseEnter = () => { clearTimeout(profileTimeoutRef.current); setIsProfileDropdownOpen(true); };
    const handleProfileMouseLeave = () => { profileTimeoutRef.current = setTimeout(() => setIsProfileDropdownOpen(false), 200); };
    
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
            <div className={`min-h-screen flex ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
                {/* --- Sidebar for Desktop --- */}
                <aside className={`w-64 flex-shrink-0 p-4 border-r ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hidden md:block`}>
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

                {/* --- Main Content --- */}
                <div className="flex-1 flex flex-col">
                    <header className={`flex justify-between items-center p-4 border-b md:justify-end ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} md:border-b-0`}>
                        <div className="md:hidden flex items-center gap-4">
                            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <MenuIcon />
                            </button>
                             <h1 className="text-xl font-extrabold">
                                <span className="animate-gradient-flow">videobelajar</span>
                            </h1>
                        </div>
                        <div className="flex items-center gap-4">
                             <div className="flex items-center gap-2">
                                <SunIcon className={`w-5 h-5 ${isDarkMode ? 'text-gray-500' : 'text-yellow-500'}`} />
                                <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                                <MoonIcon className={`w-5 h-5 ${isDarkMode ? 'text-blue-500' : 'text-gray-400'}`} />
                            </div>
                            
                            <div className="relative" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white cursor-pointer">
                                    {username && username.charAt(0).toUpperCase()}
                                </div>
                                {isProfileDropdownOpen && (
                                    <div className={`absolute right-0 mt-2 w-48 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'} rounded-md shadow-lg py-1 text-sm z-20`}>
                                        <Link to="/profile?tab=profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Ubah Profil</Link>
                                        <div className="border-t my-1 dark:border-gray-600"></div>
                                        <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500">Keluar</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                        {children}
                    </main>
                </div>

                {/* --- Sidebar for Mobile (Off-canvas) --- */}
                {isSidebarOpen && (
                    <div className="md:hidden fixed inset-0 z-30">
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsSidebarOpen(false)}></div>
                        {/* Sidebar Content */}
                        <aside className={`absolute top-0 left-0 w-64 h-full p-4 border-r ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                            <div className="px-2 mb-8">
                                <Link to="/" className="inline-block mb-4 text-gray-500 hover:text-green-500" aria-label="Kembali ke Beranda" onClick={() => setIsSidebarOpen(false)}>
                                    <ArrowLeftIcon />
                                </Link>
                                <h1 className="text-2xl font-extrabold">
                                    <span className="animate-gradient-flow">videobelajar</span>
                                </h1>
                            </div>
                             <nav className="space-y-2">
                                <NavLink to="/admin/products" end className={getLinkClass} onClick={() => setIsSidebarOpen(false)}>
                                    <DashboardIcon />
                                    <span>Dashboard</span>
                                </NavLink>
                                <NavLink to="/admin/products/manage" className={getLinkClass} onClick={() => setIsSidebarOpen(false)}>
                                    <ProductIcon />
                                    <span>Manajemen Produk</span>
                                </NavLink>
                            </nav>
                        </aside>
                    </div>
                )}
            </div>
        </>
    );
};

export default AdminLayout;