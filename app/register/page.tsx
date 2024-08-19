// Example component for user registration
"use client"; // Add this at the top of the file

import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('User created:', data);
    } else {
      console.error('Error:', data);
    }
  };

  return (
    <form className="flex min-h-screen flex-col items-center justify-between p-24" onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary w-64 rounded-full" type="submit">Register</button>
    </form>
  );
}