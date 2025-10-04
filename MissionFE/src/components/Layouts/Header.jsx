import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import ThemeToggle from '../Elements/Toggle/ThemeToggle';

const Header = ({ simple = false }) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [openMenu, setOpenMenu] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const profileTimeoutRef = useRef(null);
    const menuTimeoutRef = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUsername(storedUser);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("password");
        window.location.href = "/login";
    };
    
    const handleProfileMouseEnter = () => { clearTimeout(profileTimeoutRef.current); setIsProfileDropdownOpen(true); };
    const handleProfileMouseLeave = () => { profileTimeoutRef.current = setTimeout(() => setIsProfileDropdownOpen(false), 200); };
    const handleMenuMouseEnter = (menu) => { clearTimeout(menuTimeoutRef.current); setOpenMenu(menu); };
    const handleMenuMouseLeave = () => { menuTimeoutRef.current = setTimeout(() => setOpenMenu(null), 200); };

    const programMenuData = { 'Pemasaran': [ { id: 2, title: 'Digital Marketing Fundamental' }, { id: 6, title: 'Social Media Marketing Strategy' } ], 'Desain': [ { id: 3, title: 'Manajemen Waktu Efektif' }, { id: 7, title: 'Design Fundamentals' } ], 'Pengembangan Diri': [ { id: 4, title: 'Public Speaking Mastery' }, { id: 8, title: 'Time Management Hacks' } ], 'Bisnis': [ { id: 1, title: 'Big 4 Auditor Financial Analyst' }, { id: 5, title: 'Financial Planning for Beginners' }, { id: 9, title: 'Entrepreneurship 101' } ] };
    const animationStyles = `
        .animate-gradient-flow { background: linear-gradient(90deg, #F64920, #FFBD3A, #F64920); background-size: 200% auto; color: transparent; -webkit-background-clip: text; background-clip: text; animation: gradient-flow 6s linear infinite; }
        @keyframes gradient-flow { from { background-position: 0% center; } to { background-position: -200% center; } }
    `;

    if (simple) {
        return (
            <>
                <style>{animationStyles}</style>
                <header className={`sticky top-0 z-50 shadow-md ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="container mx-auto p-4 flex justify-between items-center">
                        <Link to="/" className="text-2xl font-extrabold">
                            <span className="animate-gradient-flow">videobelajar</span>
                        </Link>
                        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
                    <Link to="/" className="text-2xl font-extrabold">
                        <span className="animate-gradient-flow">videobelajar</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-6" onMouseLeave={handleMenuMouseLeave}>
                            <div onMouseEnter={() => handleMenuMouseEnter('program')}><button className={`hover:text-yellow-500 transition-colors duration-200 ${openMenu === 'program' ? 'text-yellow-500' : ''}`}>Program</button></div>
                            <div onMouseEnter={() => handleMenuMouseEnter('corporate')}><button className={`hover:text-yellow-500 transition-colors duration-200 ${openMenu === 'corporate' ? 'text-yellow-500' : ''}`}>Corporate</button></div>
                            <div onMouseEnter={() => handleMenuMouseEnter('about')}><button className={`hover:text-yellow-500 transition-colors duration-200 ${openMenu === 'about' ? 'text-yellow-500' : ''}`}>About</button></div>
                        </nav>
                        
                        <div className="flex items-center space-x-4">
                            {isLoggedIn ? (
                                <div className="relative" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
                                    <div className="flex items-center gap-3 cursor-pointer">
                                        <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white font-bold text-sm">
                                            {username && username.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="font-semibold text-sm">{username}</span>
                                    </div>
                                    {isProfileDropdownOpen && (
                                        <div className={`absolute right-0 mt-2 w-48 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'} rounded-md shadow-lg py-1 text-sm`}>
                                            <Link to="/profile?tab=profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Profil</Link>
                                            <Link to="/profile?tab=courses" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Kelas Video Course</Link>
                                            <Link to="/profile?tab=orders" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Daftar Pembelian</Link>
                                            <div className="border-t my-1 dark:border-gray-600"></div>
                                            <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Keluar</button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className="px-4 py-2 rounded-md font-semibold border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">Masuk</Link>
                                    <Link to="/register" className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600">Daftar</Link>
                                </>
                            )}
                            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                        </div>
                    </div>
                </div>

                {openMenu && (
                    <div className={`absolute left-0 top-full w-full shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} onMouseEnter={() => handleMenuMouseEnter(openMenu)} onMouseLeave={handleMenuMouseLeave}>
                        <div className="container mx-auto p-8">
                            {openMenu === 'program' && (
                               <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
                                   {Object.entries(programMenuData).map(([category, courses]) => (
                                       <div key={category}>
                                           <h3 className="font-bold text-gray-500 mb-4">{category}</h3>
                                           <ul>
                                               {courses.map(course => (
                                                   <li key={course.id} className="mb-2">
                                                       <Link to={`/products/${course.id}`} className={`text-sm hover:text-yellow-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{course.title}</Link>
                                                   </li>
                                               ))}
                                           </ul>
                                       </div>
                                   ))}
                               </div>
                            )}
                            {openMenu === 'corporate' && (<div><p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Informasi lebih lanjut mengenai program corporate.</p></div>)}
                            {openMenu === 'about' && (<div><p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Informasi tentang kami.</p></div>)}
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;