import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, curr) => {
      const each = ((+curr.value) * curr.exchangeRates[curr.currency].ask);
      return acc + each;
    }, 0);
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <p data-testid="email-field">
          {`Email: ${email}`}
        </p>
        <p data-testid="total-field">
          {total}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
