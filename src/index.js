import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header.js'
import BudgetForm from './components/BudgetForm/BudgetForm';
import AddBillForm from './components/AddBillModal/AddBillModal';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Header />
      <BudgetForm />
  </React.StrictMode>
);