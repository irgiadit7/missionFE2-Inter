import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPages = () => {
 return (
    <AuthLayouts 
      title="Pendaftaran Akun" 
      subtitle="Yuk, daftarkan akunmu sekarang juga!" 
      type="register"
    >
        <FormRegister />
    </AuthLayouts>
    )
}

export default RegisterPages;