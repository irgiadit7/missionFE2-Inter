import { useEffect, useState, useContext } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";






const Navbar = () => {
  const username = useLogin();
   const {isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data );

 useEffect(() => {
    const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
    }, 0);
    setTotalCart(sum);
 }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end text-black items-center font-bold text-xl px-10 h-20 ">
      <span className="mr-5">Hello, {username}</span>
      <Button className="right-2 top-2 bg-blue-600 p-2 ml-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? "Ligth" : "Dark"}
        </Button>
        
      <Button className="ml-10 bg-black" onClick={handleLogout}>
        Logout
      </Button>

      <div className="flex items-center bg-gray-800 p-2 w-10 justify-center rounded-full ml-5 text-white">
        {totalCart}
      </div>
    </div>
  );
};

export default Navbar;