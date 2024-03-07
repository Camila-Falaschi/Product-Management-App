import React from 'react';
import { useRouter } from 'next/router';
import { FiLogOut } from "react-icons/fi";

export default Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <header>
      <div>
        <p>{sessionStorage.getItem('email') || ''}</p>
      </div>
      <div>
        <button onClick={handleLogout}><FiLogOut /></button>
      </div>
    </header>
  );
};