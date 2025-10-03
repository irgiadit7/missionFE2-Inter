import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPages = () => {
 return (
    <AuthLayouts 
      title="Masuk ke Akun" 
      subtitle="Yuk, lanjut belajarmu di videobelajar" 
      type="login"
    >
        <FormLogin />
    </AuthLayouts>
    )
}

export default LoginPages;