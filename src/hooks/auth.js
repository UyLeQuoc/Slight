import AuthService from "@/services/AuthService";
import { createContext, useContext, useState } from "react"; 

const authContext = createContext();

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [error , setError] = useState("");

  const loginWithGoogle = async () => {
    const { user, error } = await AuthService.loginWithGoogle();
    setUser(user ?? null);
    setError(error ?? "");
  }

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  }

  const value = { user, error, loginWithGoogle, logout, setUser };

  return (
    <authContext.Provider value={value} {...props} />
  );
}