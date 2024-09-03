'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const formFields = [
  { name: 'githubRepoUrl', label: 'GitHub Repo URL', type: 'url' },
  { name: 'eim', label: 'EIM', type: 'text' },
  { name: 'sonartypeIqScan', label: 'Sonartype IQ Scan', type: 'text' },
  { name: 'cyberflow', label: 'Cyberflow', type: 'text' },
  { name: 'notificationEmail', label: 'Notification Email', type: 'email' },
  { name: 'xMatterAlert', label: 'X Matter Alert', type: 'text' },
];

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState(
    Object.fromEntries(formFields.map(field => [field.name, '']))
  );

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      router.push('/login');
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement API call to submit data
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">HSBC Service Onboarding</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block mb-2">{field.label}:</label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <button type="submit" className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
