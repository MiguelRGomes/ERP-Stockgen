import React from 'react';
import logo from './logo.svg';
import { Container } from './styled'

import Header from '../../components/Header';
import Routes from '../../Routes'
import AuthProvider from '../../context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Container>
        <Header />
        <Routes />
      </Container>
    </AuthProvider>
  );
}

export default App;

