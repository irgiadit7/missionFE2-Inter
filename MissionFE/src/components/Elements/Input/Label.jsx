import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Label = (props) => {
    const { htmlFor, children } = props;
    const { isDarkMode } = useContext(DarkMode);

    return (
        <label
            htmlFor={htmlFor}
            // Mengubah warna teks untuk light mode menjadi lebih gelap
            className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
            {children}
        </label>
    )
}

export default Label;