import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function Product() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <h1>🛍️ Product Page</h1>
      <p>You're viewing product with ID: <strong>{id}</strong></p>
    </div>
  );
}
