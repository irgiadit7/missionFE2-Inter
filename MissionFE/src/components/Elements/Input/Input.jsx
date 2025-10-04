import { forwardRef, useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Input = forwardRef((props, ref) => {
    const { type, placeholder, name } = props;
    const { isDarkMode } = useContext(DarkMode);

    const lightModeClasses = "bg-white border-gray-300 text-slate-900 placeholder:text-gray-400";
    const darkModeClasses = "bg-slate-700 border-slate-600 text-slate-200 placeholder:text-slate-400";

    return (
        <input
            type={type}
            className={`text-sm border rounded-full w-full py-2 px-3 placeholder:opacity-60
                        focus:outline-none focus:ring-1 focus:ring-green-500
                        ${isDarkMode ? darkModeClasses : lightModeClasses}`}
            placeholder={placeholder}
            name={name}
            id={name}
            ref={ref}
        />
    )
});

export default Input;