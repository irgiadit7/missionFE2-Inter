import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPages = () => {
 return (
    <AuthLayouts title="Register" type="register">
        <FormRegister />
    </AuthLayouts>
    )
}

export default RegisterPages;