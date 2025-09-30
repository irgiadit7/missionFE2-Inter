import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";
import { useEffect, useRef } from "react";
import { useState } from "react";

const FormLogin = () => { 
    const [loginFailed, setLoginFailed] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        // localStorage.setItem("email", event.target.email.value);
        // localStorage.setItem("password", event.target.password.value);
        // window.location.href = "/products";
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        };
        login(data, (success, res) => {
            if (success) {
                localStorage.setItem("user", data.username);
                localStorage.setItem("password", data.password);
                localStorage.setItem("token", res);
                window.location.href = "/products";
            } else {
                setLoginFailed("Login failed. Please check your username and password.");
            }
        });
    }

    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);   
    
    return (
        <form onSubmit={handleLogin}>
          
        <InputForm label="username" type="text" placeholder="Jhon doe" name="username" ref={usernameRef} />

        <InputForm label="Password" type="password" placeholder="********" name="password" />
     
      
        <Button className="bg-blue-600 w-full" type="submit">Sign in</Button>
          {loginFailed && (
                <p className=" text-red-500 text-sm font-light text-center mt-5">
                    {loginFailed}
                </p>
            )}
       </form>
    )
}

export default FormLogin;