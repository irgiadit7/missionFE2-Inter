import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../Elements/Toggle/ThemeToggle';
import { DarkMode } from '../../context/DarkMode';

const AuthLayouts = (props) => {
  const { children, title, subtitle, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

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

  return (
    <>
      <style>{animationStyles}</style>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-[#FFFDF3]'}`}>
        
        <header className={`sticky top-0 z-50 shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto p-5 flex justify-between items-center">
            <Link to="/" className="text-2xl font-extrabold">
              <span className="animate-gradient-flow">
                  videobelajar
              </span>
            </Link>
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </div>
        </header>

        <div className="flex flex-col items-center justify-center pt-20 p-4">
          <div className={`w-full max-w-md rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-center mb-6">
              <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h1>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{subtitle}</p>
            </div>
            {children}
          </div>
          <Navigation type={type} isDarkMode={isDarkMode} />
        </div>

      </div>
    </>
  );
};

const Navigation = ({ type, isDarkMode }) => {
  const textClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  if (type === 'login') {
    return (
      <p className={`text-sm mt-6 text-center ${textClass}`}>
        Belum punya akun?{' '}
        <Link to="/register" className="font-semibold text-green-600 hover:underline">
          Daftar
        </Link>
      </p>
    );
  } else {
    return (
      <p className={`text-sm mt-6 text-center ${textClass}`}>
        Sudah punya akun?{' '}
        <Link to="/login" className="font-semibold text-green-600 hover:underline">
          Masuk
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;