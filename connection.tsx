'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, handleFunc: React.Dispatch<React.SetStateAction<string>>) => 
    handleFunc(event.target.value);

  const onLogin = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: "https:///dsp/dspAuthenticate.oservice",
        method: "post",
        headers: {
          'Accept-API-Version': 'protocol-1.0,resource-2.1',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Client-Id': 'fsfsfsf',
          'X-Client-Secret': 'jsflsjflsjfsljf@123'
        },
        withCredentials: true,
        data: { username, password }
      });

      console.log(response);
      if (response.status === 200) {
        console.log("pushing to networking");
        router.push('/networking');
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    // You might want to add some initial checks here
    setIsLoading(false);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={(e) => { e.preventDefault(); onLogin(username, password); }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center">HSBC Staff Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => handleChange(e, setUsername)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
