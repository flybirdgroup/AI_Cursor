'use client';

import { useUser } from '../contexts/UserContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { username, setUsername } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    setUsername('');
    localStorage.removeItem('username');
    router.push('/');
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">One-Click-CICD Onboarding</h1>
      {username && (
        <div className="flex items-center">
          <span className="mr-2">{username}</span>
          <img
            src={`https://risk-sfjslfjslfj:16161/getPhoto?staffid=${username}`}
            alt={`${username}'s photo`}
            className="w-10 h-10 rounded-full mr-2"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/40?text=User';
            }}
          />
          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
