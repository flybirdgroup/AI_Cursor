'use client';

import { useUser } from '../contexts/UserContext';

export default function Header() {
  const { username } = useUser();

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">One-Click-CICD Onboarding</h1>
      {username && (
        <div className="flex items-center">
          <span className="mr-2">{username}</span>
          <img
            src={`https://risk-sfjslfjslfj:16161/getPhoto?staffid=${username}`}
            alt={`${username}'s photo`}
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/40?text=User';
            }}
          />
        </div>
      )}
    </header>
  );
}
