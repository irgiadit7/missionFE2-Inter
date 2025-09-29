import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPages = () => {
 return (
    <AuthLayouts title="Login" type="login">
        <FormLogin />
        
    </AuthLayouts>
    )
}

export default LoginPages;