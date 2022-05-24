import React, { useState } from "react";

const AuthContext = React.createContext<
  | {
      user: UserInfo | null;
      login: (form: AuthForm) => void;
      register: (form: AuthForm) => void;
      logout: (form: AuthForm) => void;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

interface AuthForm {
  username: string;
  password: string;
}
interface UserInfo {
  username: string;
  tel: string;
}
const authLogin = async (form: AuthForm): Promise<UserInfo> => {
  //ztodo
  return {
    username: "xxx",
    tel: "xxx",
  };
};
const authLogout = (form: AuthForm): Promise<null> => {
  return Promise.resolve(null);
};
export const AuthProvider = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  let login = (form: AuthForm) => authLogin(form).then((data) => setUser(data));
  let register = (form: AuthForm) => authLogin(form);
  let logout = (form: AuthForm) => authLogout(form).then(() => setUser(null));
  return <AuthContext.Provider value={{ user, login, register, logout }} />;
};
export const useAuth = () => {};
