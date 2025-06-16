import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', gap: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product/42">Product #42</Link>
      </nav>
    </header>
  );
}
