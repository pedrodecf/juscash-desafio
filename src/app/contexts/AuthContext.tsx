"use client"

import { createContext, useEffect, useState } from "react";
import { SigninFormData } from "../utils/signinValidation";
import { toast } from "sonner";
import { SignupFormData } from "../utils/signupValidation";

interface AuthContextType {
  user: SigninFormData | null;
  Register: (data: SignupFormData) => boolean;
  Login: (data: SigninFormData) => boolean;
  Logout: () => void;
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userLogged, setUserLogged] = useState<SigninFormData | null>(null);

  useEffect(() => {
    const userJson = localStorage.getItem('@juscash:pedrodecf-userLogged');
    if (!userJson) {
      document.cookie = "userLogged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      return;
    }    

    const user = JSON.parse(userJson);
    setUserLogged({
      email: user.email,
      password: user.password,
    });

    document.cookie = "userLogged=true; path=/";
  }, [])

  function Register(data: SignupFormData) {
    const users = JSON.parse(localStorage.getItem('@juscash:pedrodecf-users') || '[]');  
    const userExists = users.some((user: SignupFormData) => user.email === data.email);
  
    if (userExists) {
      toast('Este email já está cadastrado', {
        description: 'Por favor, use outro email',
        action: { label: 'Fechar', onClick: () => {} }
      })

      return false;
    }

    data.created_at = new Date().toISOString();

    users.push(data);
    localStorage.setItem('@juscash:pedrodecf-users', JSON.stringify(users));

    toast('Conta criada com sucesso', {
      description: 'Faça o login',
      action: { label: 'Fechar', onClick: () => {} }
    })

    return true;
  }

  function Login(data: SigninFormData) {
    const users = JSON.parse(localStorage.getItem('@juscash:pedrodecf-users') || '[]');
    const user = users.find((user: SigninFormData) => user.email === data.email);
  
    if (!user || user.password !== data.password) {
      toast('Email e/ou senha inválido', {
        description: 'Por favor, verifique suas credenciais',
        action: { label: 'Fechar', onClick: () => {} },
      })

      return false;
    }

    toast('Login efetuado com sucesso', {
      description: 'Seja bem-vindo ao JusCash',
      action: { label: 'Fechar', onClick: () => {} },
    })

    localStorage.setItem('@juscash:pedrodecf-userLogged', JSON.stringify(user));
    setUserLogged({
      email: user.email,
      password: user.password,
    });

    document.cookie = "userLogged=true; path=/";
    
    return true;
  }

  function Logout() {
    localStorage.removeItem('@juscash:pedrodecf-userLogged');
    setUserLogged(null);
    document.cookie = "userLogged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }

  return (
    <AuthContext.Provider value={{user: userLogged, Register, Login, Logout}}>
      {children}
    </AuthContext.Provider>
  )
}