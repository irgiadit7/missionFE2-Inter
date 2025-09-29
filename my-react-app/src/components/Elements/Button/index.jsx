const Button = (props) => {
  const {children, 
    className ="bg-blue-600", 
    type = "button",
    onClick = () => {},
} = props;

  return (
    <button
      className={`${className} font-extrabold text-white px-6 py-2 rounded-full`} type={type}
      onClick={() => onClick()}
      >
    
    
      {children}
    </button>
  );
};

export default Button;