import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import AccountService from './context/AccountContext';

function App() {
  return (
    <AccountService>
      <Layout/>
    </AccountService>
  );
}

export default App;
