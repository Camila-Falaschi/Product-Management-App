import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { requestPost } from "../services/request";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const verifyEmail = /\S+@\S+\.\S+/.test(email);
    const passwordLength = password.length >= 6;
    const passwordValidation = password === verifyPassword;
    if (!passwordValidation) toast.error("Senhas não conferem.");
    if (verifyEmail && passwordLength && passwordValidation) setIsDisabled(false);
  }, [email, password]);


  const handleLoginButton = async (event) => {
    event.preventDefault();

    try {
      const { data } = await requestPost( '/register', { email, password });
      sessionStorage.setItem('token', data.token);
      router.push('/');
    } catch (error) {
      toast.error('Usuário já cadastrado');
    }
  };

  return (
    <main>
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              placeholder="email@email.com"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              id="password"
              placeholder="************"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              required
            />
          </label>
          <label htmlFor="verify-password">
            Confirme sua senha
            <input
              type="password"
              id="verify-password"
              placeholder="************"
              value={password}
              onChange={({ target }) => setVerifyPassword(target.value)}
              required
            />
          </label>
          <button
            type="submit"
            onClick={(event) => handleLoginButton(event)}
            disabled={isDisabled}
          >
            Sign in
          </button>
          <Link href="/login">
            <a>Já possui uma conta? Faça login aqui!</a>
          </Link>
        </form>
        <div />
      </div>
    </main>
  );
}
