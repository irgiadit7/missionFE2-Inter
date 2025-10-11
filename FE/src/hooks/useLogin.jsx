import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
    const [username, setUsername] = useState("");
       useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          // Cek jika token adalah token khusus admin
          if (token === 'admin-fake-token') {
            const adminUser = localStorage.getItem("user");
            setUsername(adminUser);
          } else {
            // Jika bukan, dekode token seperti biasa untuk user
            try {
              const user = getUsername(token);
              setUsername(user);
            } catch (error) {
              console.error("Invalid token:", error);
              // Jika token tidak valid, alihkan ke login
              window.location.href = "/login";
            }
          }
        } else {
          window.location.href = "/login";
        }
      }, []);

    return username;
    };