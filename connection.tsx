'use client';

import { useState, FormEvent } from 'react';

export default function ApiTest() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(null);
    setError(null);

    try {
      const res = await fetch('https://cmb-staff-dsp-dev.hk.hsbc:8443/dsp/dspAuthenticate.jsp?realm=Staff&service=ssoservice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept-API-Version': "sfjslfjslfjsl",
          'x-requested-with': "XMLHTTPRequest",
          'X-client-id': "DSP_Test_client",
          'x-client-secret': "fjslfjsl"
        },
        body: new URLSearchParams({ username, password }),
      });

      const data = await res.json();
      setResponse(data);
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to authenticate');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label htmlFor="username" className="block">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-1"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-1"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Test API
        </button>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}

      {response && (
        <div>
          <h2 className="text-xl font-bold mb-2">API Response:</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
