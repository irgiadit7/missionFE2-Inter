import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex font-extrabold min-h-screen items-center justify-center">

      <div className="w-full max-w-xs">
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
