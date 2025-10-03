import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';

const Header = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [openMenu, setOpenMenu] = useState(null);

    // Data menu program yang disesuaikan dengan courseData Anda
    const programMenuData = {
        'Pemasaran': [
            { id: 2, title: 'Digital Marketing Fundamental' },
            { id: 6, title: 'Social Media Marketing Strategy' }
        ],
        'Desain': [
            { id: 3, title: 'Manajemen Waktu Efektif' }, // Sesuai data, kategori: desain
            { id: 7, title: 'Design Fundamentals' }
        ],
        'Pengembangan Diri': [
            { id: 4, title: 'Public Speaking Mastery' },
            { id: 8, title: 'Time Management Hacks' }
        ],
        'Bisnis': [
            { id: 1, title: 'Big 4 Auditor Financial Analyst' },
            { id: 5, title: 'Financial Planning for Beginners' },
            { id: 9, title: 'Entrepreneurship 101' }
        ]
    };

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
            <style>{animationStyles}</style>
            <header 
                className={`sticky top-0 z-50 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                onMouseLeave={() => setOpenMenu(null)}
            >
                <div className="container mx-auto flex justify-between items-center p-4">
                    <Link to="/" className="text-2xl font-extrabold">
                        <span className="animate-gradient-flow">
                            videobelajar
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-6">
                            <div onMouseEnter={() => setOpenMenu('program')}>
                                <button className={`hover:text-yellow-500 transition-colors duration-200 ${openMenu === 'program' ? 'text-yellow-500' : ''}`}>
                                    Program
                                </button>
                            </div>
                            <div onMouseEnter={() => setOpenMenu('corporate')}>
                                <button className={`hover:text-yellow-500 transition-colors duration-200 ${openMenu === 'corporate' ? 'text-yellow-500' : ''}`}>
                                    Corporate
                                </button>
                            </div>
                            <div onMouseEnter={() => setOpenMenu('about')}>
                                <button className={`hover:text-yellow-500 transition-colors duration-200 ${openMenu === 'about' ? 'text-yellow-500' : ''}`}>
                                    About
                                </button>
                            </div>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Link to="/login" className="px-4 py-2 rounded-md font-semibold border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">Masuk</Link>
                            <Link to="/register" className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600">Daftar</Link>
                            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                {isDarkMode ? '🌞' : '🌜'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* === MEGA MENU DINAMIS (RELEVAN DENGAN KONTEN) === */}
                {openMenu && (
                    <div 
                        className={`absolute left-0 top-full w-full shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <div className="container mx-auto p-8">
                            {/* Konten untuk Menu Program */}
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

                            {/* Konten untuk Menu Corporate */}
                            {openMenu === 'corporate' && (
                                <div>
                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                       Informasi lebih lanjut mengenai program corporate.
                                    </p>
                                </div>
                            )}

                            {/* Konten untuk Menu About */}
                            {openMenu === 'about' && (
                                 <div className="grid grid-cols-3 gap-8">
                                     <div className="col-span-2 mt-2">
                                         <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About</h3>
                                         <p className={`font-semibold text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                             Karena kesuksesan ialah hak setiap anak bangsa, kami berambisi
                                             <span className="block font-semibold text-sm mb-8">
                                                 untuk memberikan akses pendidikan yang berkualitas pada generasi muda Indonesia.
                                             </span>
                                         </p>
                                     </div>
                                     <div className="col-span-1 flex space-x-8 mt-10">
                                         <Link to="/tentang-kami" className="font-semibold hover:text-yellow-500">Tentang Kami</Link>
                                         <Link to="/alumni" className="font-semibold hover:text-yellow-500">Alumni</Link>
                                     </div>
                                 </div>
                            )}
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;