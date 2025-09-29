import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPages = () => {
 return (
    <AuthLayouts title="Login">
        <FormLogin />
    </AuthLayouts>
    )
}

export default LoginPages;