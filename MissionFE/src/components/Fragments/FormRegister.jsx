import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => { 
    return (
        <form action="">
        <InputForm label="Fullname" type="Text" placeholder="insert your name here" name="fullname" />
        <InputForm label="Email" type="email" placeholder="example@email.com" name="email" />

        <InputForm label="Password" type="password" placeholder="********" name="password" />
        <InputForm label="confirm Password" type="password" placeholder="********" name="confirmPassword" />
     
      
      <Button className="bg-blue-600 w-full">Sign up</Button>
       </form>
    )
}

export default FormRegister;