import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <h1>🏠 Home Page</h1>
      <img src='/static/icon/logo.jpeg' alt="logo" />
      <p>Welcome to the legacy React home page!</p>
    </div>
  );
}
