'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUser } from './contexts/UserContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setUsername: setGlobalUsername } = useUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, handleFunc: React.Dispatch<React.SetStateAction<string>>) => 
    handleFunc(event.target.value);

  const onLogin = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: "https://[MASKED_URL]/dsp/dspAuthenticate.jsp?realm=Staff&service=ssoservice",
        method: "post",
        headers: {
          'Accept-API-Version': 'protocol-1.0,resource-2.1',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Client-Id': '[MASKED_CLIENT_ID]',
          'X-Client-Secret': '[MASKED_CLIENT_SECRET]'
        },
        withCredentials: true,
        data: { username, password }
      });

      console.log(response);
      if (response.status === 200) {
        setGlobalUsername(username); // Set the username in the global context
        console.log("pushing to main");
        router.push('/main');
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">HSBC Staff Login</h1>
        <form onSubmit={(e) => { e.preventDefault(); onLogin(username, password); }} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-2">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => handleChange(e, setUsername)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button 
            type="submit" 
            className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  );
}
