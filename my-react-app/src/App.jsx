import React from "react";
const Button = (props) => {
  const {children ="holder childern", color ="bg-black", text} = props;

  return (
    <button
      className={`${color} font-extrabold text-white px-6 py-2 rounded-full`} type="sumbit" >
    
      {text} 
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex font-extrabold bg-blue-400 min-h-screen items-center justify-center">

      <div className="flex gap-5">
        <Button color="bg-amber-700">login</Button>
        <Button color="bg-red-700">logout</Button>
        <Button></Button>
      </div>

    </div>
  );
}

export default App;
