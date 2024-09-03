'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          HSBC Onboarding
        </Link>
        <button
          onClick={handleLogout}
          className="bg-white text-red-600 px-4 py-2 rounded hover:bg-red-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
