import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';

const Footer = () => {
    const { isDarkMode } = useContext(DarkMode);

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
            from { background-position: 0% center; }
            to { background-position: -200% center; }
        }
    `;

    // Mendefinisikan class secara kondisional
    const footerClasses = isDarkMode 
        ? 'bg-gray-900 text-gray-300 shadow-[0_-4px_6px_-1px_rgba(255,255,255,0.05)]' 
        : 'bg-white text-gray-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]';
    
    const headingClasses = isDarkMode ? 'text-white' : 'text-gray-900';
    const linkClasses = isDarkMode ? 'hover:text-yellow-400' : 'hover:text-yellow-500';
    const borderClasses = isDarkMode ? 'border-gray-700' : 'border-gray-200';

    return (
        <>
            <style>{animationStyles}</style>
            
            <footer className={`py-16 px-8 ${footerClasses}`}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                        
                        {/* Kolom Brand Info */}
                        <div className="md:col-span-2">
                            <Link to="/" className="text-2xl font-extrabold mb-4 inline-block">
                                 <span className="animate-gradient-flow">
                                    videobelajar
                                 </span>
                            </Link>
                            <p className={`mb-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Gali Potensi Anda Melalui Pembelajaran Video di harisenin.id!</p>
                            <p className="text-sm">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                            <p className="text-sm">+62-877-7123-1234</p>
                        </div>

                        {/* Kolom Kategori */}
                        <div>
                            <h4 className={`font-bold mb-4 ${headingClasses}`}>Kategori</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className={linkClasses}>Digital & Teknologi</a></li>
                                <li><a href="#" className={linkClasses}>Pemasaran</a></li>
                                <li><a href="#" className={linkClasses}>Manajemen Bisnis</a></li>
                                <li><a href="#" className={linkClasses}>Pengembangan Diri</a></li>
                                <li><a href="#" className={linkClasses}>Desain</a></li>
                            </ul>
                        </div>

                        {/* Kolom Perusahaan */}
                        <div>
                            <h4 className={`font-bold mb-4 ${headingClasses}`}>Perusahaan</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className={linkClasses}>Tentang Kami</a></li>
                                <li><a href="#" className={linkClasses}>FAQ</a></li>
                                <li><a href="#" className={linkClasses}>Kebijakan Privasi</a></li>
                                <li><a href="#" className={linkClasses}>Bantuan</a></li>
                            </ul>
                        </div>
                        
                        {/* Kolom Komunitas */}
                         <div>
                            <h4 className={`font-bold mb-4 ${headingClasses}`}>Komunitas</h4>
                            <ul className="space-y-2 text-sm">
                                 <li><a href="#" className={linkClasses}>Tipe Sukses</a></li>
                                <li><a href="#" className={linkClasses}>Blog</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* Footer Bawah */}
                    <div className={`border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-xl ${borderClasses}`}>
                        <p>&copy;2025 Irgi adit pratama</p>
                        
                        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                            <a href="https://www.linkedin.com/in/irgi-adit-pratama/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-900">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                </svg>
                            </a>
                            <a href="https://github.com/irgiadit7" aria-label="Github" target="_blank" rel="noopener noreferrer" className={`text-gray-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 172 172">
                                    <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                        <g fill="currentColor">
                                            <path d="M86,0c-47.45312,0 -86,38.54688 -86,86c0,37.99219 24.63281,70.20313 58.78125,81.59375c4.3125,0.78125 5.875,-1.85937 5.875,-4.125c0,-2.03125 -0.07812,-8.34375 -0.125,-15.375c-23.92187,5.1875 -28.96875,-10.3125 -28.96875,-10.3125c-3.92187,-9.96875 -9.57812,-12.625 -9.57812,-12.625c-7.82812,-5.34375 0.59375,-5.23437 0.59375,-5.23437c8.65625,0.60938 13.20313,8.89063 13.20313,8.89063c7.6875,13.17188 20.17188,9.375 25.09375,7.17188c0.78125,-5.57812 3,-9.375 5.46875,-11.53125c-19.14062,-2.17187 -39.25,-9.57812 -39.25,-42.59375c0,-9.40625 3.35938,-17.09375 8.875,-23.125c-0.89062,-2.17187 -3.84375,-10.95312 0.84375,-22.8125c0,0 7.23438,-2.3125 23.6875,8.85938c6.875,-1.90625 14.26563,-2.85937 21.625,-2.875c7.35938,0.01563 14.75,0.96875 21.625,2.875c16.45313,-11.17187 23.6875,-8.85938 23.6875,-8.85938c4.70313,11.85938 1.75,20.64063 0.85938,22.8125c5.51563,6.03125 8.85938,13.71875 8.85938,23.125c0,33.10938 -20.14062,40.40625 -39.34375,42.53125c3.07813,2.65625 5.84375,7.875 5.84375,15.875c0,11.53125 -0.10937,20.82813 -0.10937,23.65625c0,2.28125 1.54688,4.95313 5.90625,4.10938c34.14844,-11.39062 58.75,-43.60156 58.75,-81.57812c0,-47.45312 -38.54688,-86 -86,-86z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/share/1EDMkUGfg8/" target='_blank' rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 48 48">
                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                </svg>
                            </a>
                            <a href="https://mail.google.com/mail?view=cm&fs=1&to=codewithgiii@gmail.com&su=Hai&body=" aria-label="Gmail" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48">
                                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343,3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;