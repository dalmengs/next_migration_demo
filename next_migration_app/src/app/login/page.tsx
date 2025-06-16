'use client';

import { useState } from 'react';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`(Demo) email=${email}, pw=${pw}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">🔐 Login (Next.js)</h1>

      <form
        className="flex w-80 flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          className="rounded border px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={pw}
          required
          onChange={e => setPw(e.target.value)}
          className="rounded border px-3 py-2"
        />
        <button
          type="submit"
          className="rounded bg-purple-600 py-2 font-semibold text-white hover:bg-purple-700"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
