import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Dashboard() {
  api.get('appointments');
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
