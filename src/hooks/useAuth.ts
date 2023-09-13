import { useContext } from "react";
import { AuthContext } from "../app/context/AuthContext";

export function useAuth() {
  return useContext(AuthContext);
}
