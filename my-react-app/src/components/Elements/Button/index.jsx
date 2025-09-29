const Button = (props) => {
  const {children, className ="bg-blue-600"} = props;

  return (
    <button
      className={`${className} font-extrabold text-white px-6 py-2 rounded-full`} type="sumbit" >
    
    
      {children}
    </button>
  );
};

export default Button;