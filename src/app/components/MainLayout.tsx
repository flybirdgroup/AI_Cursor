'use client';

import Header from './Header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-4">
        {children}
      </main>
    </>
  );
}
