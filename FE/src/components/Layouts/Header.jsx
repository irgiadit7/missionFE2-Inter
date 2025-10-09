// src/components/Layouts/Header.jsx

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DarkMode } from '../../context/DarkMode';
import ThemeToggle from '../Elements/Toggle/ThemeToggle';

const Header = ({ simple = false }) => {
    const { isMobileMenuOpen, handleToggleMobileMenu } = useOutletContext(); 
    
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [openMenu, setOpenMenu] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [userRole, setUserRole] = useState(null); // State untuk menyimpan peran pengguna
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const profileTimeoutRef = useRef(null);
    const menuTimeoutRef = useRef(null);
    
    const cartItems = useSelector((state) => state.cart.data);
    const totalItemsInCart = cartItems.length; 

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            const storedUser = localStorage.getItem("user");
            const role = localStorage.getItem("role"); // Ambil role dari localStorage
            if (storedUser) {
                setUsername(storedUser);
            }
            if (role) {
                setUserRole(role); // Simpan role ke state
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear(); // Menghapus semua item dari localStorage
        window.location.href = "/";
    };
    
    const handleProfileMouseEnter = () => { clearTimeout(profileTimeoutRef.current); setIsProfileDropdownOpen(true); };
    const handleProfileMouseLeave = () => { profileTimeoutRef.current = setTimeout(() => setIsProfileDropdownOpen(false), 200); };
    const handleMenuMouseEnter = (menu) => { clearTimeout(menuTimeoutRef.current); setOpenMenu(menu); };
    const handleMenuMouseLeave = () => { menuTimeoutRef.current = setTimeout(() => setOpenMenu(null), 200); };

    const toggleNestedMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };

    const handleLinkClick = () => {
        if(isMobileMenuOpen) {
            handleToggleMobileMenu();
        }
    };

    const programMenuData = { 'Pemasaran': [ { id: 2, title: 'Digital Marketing Fundamental' }, { id: 6, title: 'Social Media Marketing Strategy' } ], 'Desain': [ { id: 3, title: 'UI/UX Design Basics' }, { id: 7, title: 'Design Fundamentals' } ], 'Pengembangan Diri': [ { id: 4, title: 'Public Speaking Mastery' }, { id: 8, title: 'Time Management Hacks' } ], 'Bisnis': [ { id: 1, title: 'Big 4 Auditor Financial Analyst' }, { id: 5, title: 'Financial Planning for Beginners' }, { id: 9, title: 'Entrepreneurship 101' } ] };
    const animationStyles = `
        .animate-gradient-flow { background: linear-gradient(90deg, #F64920, #FFBD3A, #F64920); background-size: 200% auto; color: transparent; -webkit-background-clip: text; background-clip: text; animation: gradient-flow 6s linear infinite; }
        @keyframes gradient-flow { from { background-position: 0% center; } to { background-position: -200% center; } }
    `;

    const MenuIcon = (props) => <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>;
    const CloseIcon = (props) => <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>;
    const SunIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> );
    const MoonIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> );

    if (simple) {
        return (
            <>
                <style>{animationStyles}</style>
                <header className={`sticky top-0 z-50 shadow-md ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="container mx-auto p-4 flex justify-between items-center">
                        <Link to="/" className="text-2xl font-extrabold"><span className="animate-gradient-flow">videobelajar</span></Link>
                        <div className="flex items-center gap-2">
                            <SunIcon className={`w-6 h-6 ${isDarkMode ? 'text-gray-500' : 'text-yellow-500'}`} />
                            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                            <MoonIcon className={`w-6 h-6 ${isDarkMode ? 'text-blue-500' : 'text-gray-400'}`} />
                        </div>
                    </div>
                </header>
            </>
        );
    }

    return (
        <>
            <style>{animationStyles}</style>
            <header className={`sticky top-0 z-50 shadow-md ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                <div className="container mx-auto flex justify-between items-center p-4">
                    <Link to="/" className="text-2xl font-extrabold"><span className="animate-gradient-flow">videobelajar</span></Link>
                    
                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-6" onMouseLeave={handleMenuMouseLeave}>
                            <div onMouseEnter={() => handleMenuMouseEnter('program')}><button className={`hover:text-yellow-500 transition-colors duration-200 ${openMenu === 'program' ? 'text-yellow-500' : ''}`}>Program</button></div>
                            <div onMouseEnter={() => handleMenuMouseEnter('corporate')}><button className={`hover:text-yellow-500 transition-colors duration-200 ${openMenu === 'corporate' ? 'text-yellow-500' : ''}`}>Corporate</button></div>
                            <div onMouseEnter={() => handleMenuMouseEnter('about')}><button className={`hover:text-yellow-500 transition-colors duration-200 ${openMenu === 'about' ? 'text-yellow-500' : ''}`}>About</button></div>
                        </nav>
                        
                        <div className="flex items-center space-x-4">
                            {isLoggedIn && (
                                <Link to="/cart" className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                    {totalItemsInCart > 0 && (
                                        <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                                            {totalItemsInCart}
                                        </span>
                                    )}
                                </Link>
                            )}

                            {isLoggedIn ? (
                                <div className="relative" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
                                    <div className="flex items-center gap-3 cursor-pointer">
                                        <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white font-bold text-sm">{username && username.charAt(0).toUpperCase()}</div>
                                        <span className="font-semibold text-sm">{username}</span>
                                    </div>
                                    {isProfileDropdownOpen && (
                                        <div className={`absolute right-0 mt-2 w-48 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'} rounded-md shadow-lg py-1 text-sm z-20`}>
                                            {userRole === 'admin' && (
                                                <>
                                                    <Link to="/admin/products" className="block px-4 py-2 font-bold text-green-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-green-400">
                                                        Admin Panel
                                                    </Link>
                                                    <div className="border-t my-1 dark:border-gray-600"></div>
                                                </>
                                            )}
                                            <Link to="/profile?tab=profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Profil</Link>
                                            <Link to="/profile?tab=courses" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Kelas Video Course</Link>
                                            <Link to="/profile?tab=orders" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Daftar Pembelian</Link>
                                            <div className="border-t my-1 dark:border-gray-600"></div>
                                            <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500">Keluar</button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className="px-4 py-2 rounded-md font-semibold border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">Masuk</Link>
                                    <Link to="/register" className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600">Daftar</Link>
                                </>
                            )}
                            <div className="flex items-center gap-2">
                                <SunIcon className={`w-6 h-6 ${isDarkMode ? 'text-gray-500' : 'text-yellow-500'}`} />
                                <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                                <MoonIcon className={`w-6 h-6 ${isDarkMode ? 'text-blue-500' : 'text-gray-400'}`} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center md:hidden">
                        {isLoggedIn && (
                            <Link to="/cart" className="relative p-2 mr-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                {totalItemsInCart > 0 && (
                                    <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                                        {totalItemsInCart}
                                    </span>
                                )}
                            </Link>
                        )}
                        <button onClick={handleToggleMobileMenu} className={`p-2 rounded-md ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}>
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {openMenu && !isMobileMenuOpen && ( 
                    <div className={`absolute left-0 top-full w-full shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} onMouseEnter={() => handleMenuMouseEnter(openMenu)} onMouseLeave={handleMenuMouseLeave}>
                        <div className="container mx-auto p-8">
                            {openMenu === 'program' && (
                               <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
                                   {Object.entries(programMenuData).map(([category, courses]) => (
                                       <div key={category}>
                                           <h3 className="font-bold text-gray-500 mb-4">{category}</h3>
                                           <ul>{courses.map(course => (<li key={course.id} className="mb-2"><Link to={`/products/${course.id}`} className={`text-sm hover:text-yellow-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{course.title}</Link></li>))}</ul>
                                       </div>
                                   ))}
                               </div>
                            )}
                            {openMenu === 'corporate' && (<div><p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tingkatkan keahlian tim Anda dengan program pembelajaran fleksibel yang dirancang khusus untuk kebutuhan perusahaan. Hubungi kami untuk solusi corporate.</p></div>)}
                            {openMenu === 'about' && (<div><p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Videobelajar adalah platform revolusioner yang didedikasikan untuk menyediakan pembelajaran video interaktif berkualitas tinggi. Kami percaya bahwa setiap orang berhak mendapatkan akses ke pendidikan terbaik, kapan pun dan di mana pun. Misi kami adalah memberdayakan individu untuk mencapai potensi penuh mereka melalui kursus yang relevan dengan industri, dipandu oleh para ahli di bidangnya.</p></div>)}
                        </div>
                    </div>
                )}
                
                <div className={`md:hidden absolute top-full left-0 w-full shadow-lg transition-all duration-300 ease-in-out z-40 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className={`p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                        <nav className="space-y-2 mb-4">
                            {/* ... mobile nav items ... */}
                        </nav>
                        <div className="border-t pt-4 space-y-3">
                            {isLoggedIn ? (
                                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                    <button onClick={() => toggleNestedMenu('profile')} className="w-full flex items-center justify-between font-semibold">
                                         <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white font-bold text-sm">{username && username.charAt(0).toUpperCase()}</div>
                                            <span className="text-sm">{username}</span>
                                         </div>
                                         <svg className={`w-4 h-4 transform transition-transform ${openMenu === 'profile' ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    {openMenu === 'profile' && (
                                        <div className="mt-3 space-y-1 border-t pt-3 transition-all duration-300 ease-in-out">
                                            {userRole === 'admin' && (
                                                <Link to="/admin/products" onClick={handleLinkClick} className={`block px-4 py-2 text-sm font-bold rounded-md text-green-600 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-slate-200'}`}>Admin Panel</Link>
                                            )}
                                            <Link to="/profile?tab=profile" onClick={handleLinkClick} className={`block px-4 py-2 text-sm rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-slate-200'}`}>Profil</Link>
                                            <Link to="/profile?tab=courses" onClick={handleLinkClick} className={`block px-4 py-2 text-sm rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-slate-200'}`}>Kelas Video Course</Link>
                                            <Link to="/profile?tab=orders" onClick={handleLinkClick} className={`block px-4 py-2 text-sm rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-slate-200'}`}>Daftar Pembelian</Link>
                                            <button onClick={() => { handleLogout(); handleLinkClick(); }} className={`w-full text-left px-4 py-2 text-sm rounded-md text-red-500 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-slate-200'}`}>Keluar</button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className="block w-full text-center px-4 py-2 rounded-full font-semibold border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">Masuk</Link>
                                    <Link to="/register" className="block w-full text-center bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-600">Daftar</Link>
                                </>
                            )}
                            <div className={`flex justify-between items-center p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                <span className='font-semibold'>Tema</span>
                                <div className="flex items-center gap-2">
                                    <SunIcon className={`w-5 h-5 ${isDarkMode ? 'text-gray-500' : 'text-yellow-500'}`} />
                                    <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                                    <MoonIcon className={`w-5 h-5 ${isDarkMode ? 'text-blue-500' : 'text-gray-400'}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;