import React from 'react';
import Header from '../components/Header';
import CostsForm from '../components/CostsForm';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CostsForm />
        <Expenses />
      </div>
    );
  }
}

export default Wallet;
