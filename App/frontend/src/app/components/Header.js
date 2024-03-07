'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { FiLogOut } from "react-icons/fi";

export default function Header () {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    router.push('/login');
  };

  const email = sessionStorage.getItem('email') || 'Not logged in';

  return (
    <header>
      <div>
        <p>{email}</p>
      </div>
      <div>
        <button onClick={handleLogout}><FiLogOut /></button>
      </div>
    </header>
  );
};