import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const {isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div className={`flex font-extrabold min-h-screen items-center justify-center ${isDarkMode && "bg-slate-900"}`}>

      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? "Ligth" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          welcome, please enter your details!
        </p>
        {children}
        <Navigation type={type} />
      </div>
      
    </div>
  );
};

const Navigation = ({type}) => {
  if (type === 'login') {
    return (
     <p className="text-sm font-light mt-5 text-center">
           Don't have an account?
          <Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1">
              Register
          </Link>
        </p>
    )
  } else {
    return (
      <p className="text-sm font-light mt-5 text-center">
          Already have an account?
          <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">
              Login
          </Link>
        </p>
    )
  }
}

export default AuthLayouts;
