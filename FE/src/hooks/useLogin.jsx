import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
    const [username, setUsername] = useState("");
       useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          const user = getUsername(token);
          setUsername(user);
        } else {
          window.location.href = "/login";
        }
      }, []);

    return username;
    };