import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { requestPost } from "../services/request.js";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const verifyEmail = /\S+@\S+\.\S+/.test(email);
    const passwordLength = 6;
    const verifyPassword = password.length >= passwordLength;
    if (verifyEmail && verifyPassword) setIsDisabled(false);
  }, [email, password]);


  const handleLoginButton = async (event) => {
    event.preventDefault();

    try {
      const { data } = await requestPost("/login", { email, password });
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('token', data.token);
      router.push('/');
    } catch (error) {
      toast.error("Sinto muito, seu login ou senha está incorreto.");
    }
  };

  return (
    <main>
      <div>
        <div>
          <h1>Product</h1>
          <h1>Management</h1>
          <h1>APP</h1>
        </div>
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
          <button
            type="submit"
            onClick={(event) => handleLoginButton(event)}
            disabled={isDisabled}
          >
            Login
          </button>
          <Link href="/auth/register">
            <a>Não Possui uma conta? Cadastre-se aqui!</a>
          </Link>
        </form>
      </div>
      <div />
    </main>
  );
}
