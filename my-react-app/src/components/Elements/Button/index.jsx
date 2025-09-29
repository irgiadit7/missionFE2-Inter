const Button = (props) => {
  const {children, classname ="bg-black"} = props;

  return (
    <button
      className={`${classname} font-extrabold text-white px-6 py-2 rounded-full`} type="sumbit" >
    
    
      {children}
    </button>
  );
};

export default Button;