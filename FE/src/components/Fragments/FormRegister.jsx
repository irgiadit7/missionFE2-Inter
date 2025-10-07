import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const FormRegister = () => { 
    const { isDarkMode } = useContext(DarkMode);

    const GoogleIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.901,35.638,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
    );

    // Menyamakan style dengan FormLogin
    const masukBtnClasses = isDarkMode
        ? "bg-gray-800 border-green-500 text-green-500 hover:bg-gray-700"
        : "bg-white border-green-600 text-green-600 hover:bg-green-600 hover:text-white";

    const googleBtnClasses = isDarkMode
        ? "bg-gray-800 border-gray-600 hover:bg-gray-700"
        : "bg-white border-gray-300 hover:bg-gray-50";

    return (
        <form action="">
            <InputForm label="Nama Lengkap" type="text" placeholder="Masukkan nama lengkap" name="fullname" />
            <InputForm label="E-mail" type="email" placeholder="contoh@gmail.com" name="email" />
            <InputForm label="Kata Sandi" type="password" placeholder="Masukkan kata sandi" name="password" />
            <InputForm label="Konfirmasi Kata Sandi" type="password" placeholder="Konfirmasi kata sandi Anda" name="confirmPassword" />
            
            <div className="space-y-3 mt-6">
                <Button className="bg-green-600 hover:bg-green-700 w-full" type="submit">Daftar</Button>
                <Link 
                    to="/login" 
                    className={`group block w-full text-center py-2 px-4 rounded-full font-semibold border transition-colors ${masukBtnClasses}`}
                >
                    Masuk
                </Link>
            </div>
            
            <div className="flex items-center my-6">
                <hr className={`flex-grow border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}/>
                <span className="px-4 text-gray-400 text-sm">atau</span>
                <hr className={`flex-grow border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}/>
            </div>

            <button 
                type="button" 
                className={`w-full flex justify-center items-center gap-2 py-2 px-4 border rounded-full transition-colors ${googleBtnClasses}`}
            >
                <GoogleIcon />
                <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>
                    Daftar dengan Google
                </span>
            </button>
       </form>
    )
}

export default FormRegister;