import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
