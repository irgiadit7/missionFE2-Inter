import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => { 
    return (
        <form action="">
        <InputForm label="Email" type="email" placeholder="example@email.com" name="email" />

        <InputForm label="Password" type="password" placeholder="********" name="password" />
     
      
        <Button className="bg-blue-600 w-full">Sign in</Button>
       </form>
    )
}

export default FormLogin;