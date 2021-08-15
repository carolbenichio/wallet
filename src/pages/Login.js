import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
    this.saveAndRedirect = this.saveAndRedirect.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  isValid() {
    const { email, password } = this.state;
    const patternEmail = /(.*)@(.*).com/;
    const SEIS = 6;
    if (patternEmail.test(email) && password.length >= SEIS) {
      return true;
    }
    return false;
  }

  saveAndRedirect() {
    const { setEmail } = this.props;
    const { email } = this.state;
    setEmail(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, redirect } = this.state;
    if (!redirect) {
      return (
        <div>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            disabled={ !this.isValid() }
            type="button"
            onClick={ this.saveAndRedirect }
          >
            Entrar
          </button>
        </div>
      );
    }
    return <Redirect to="/carteira" />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (value) => dispatch(saveEmail(value)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
