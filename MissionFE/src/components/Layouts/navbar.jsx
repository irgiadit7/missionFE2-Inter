import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";
import ThemeToggle from '../Elements/Toggle/ThemeToggle'; // Rute baru

const Navbar = () => {
    const username = useLogin();
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { total } = useTotalPrice();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => acc + item.qty, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("password");
        window.location.href = "/login";
    };

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsProfileDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsProfileDropdownOpen(false);
        }, 200);
    };

    return (
        <div className="flex justify-end h-20 px-10 font-bold items-center gap-5">
            <div className="flex items-center bg-gray-800 p-2 px-4 justify-center rounded-full text-white text-sm">
                Item: {totalCart} | price: ${total}
            </div>
            
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white font-bold text-sm">
                        {username && username.charAt(0).toUpperCase()}
                    </div>
                    <span className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>{username}</span>
                </div>
                {isProfileDropdownOpen && (
                    <div className={`absolute right-0 mt-2 w-48 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} rounded-md shadow-lg py-1 text-sm z-20`}>
                        <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Profil</Link>
                        <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Daftar Pembelian</Link>
                        <Link to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Kelas Video Course</Link>
                        <div className="border-t my-1 dark:border-gray-600"></div>
                        <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Keluar</button>
                    </div>
                )}
            </div>
            
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
    );
};

export default Navbar;