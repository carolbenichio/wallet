import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { fetchAllCurrencies, getExpenses, fetchCurrencies } from '../actions';

const inputValues = {
  type: 'text',
  name: 'value',
  id: 'value',
};
const inputDescription = {
  type: 'text',
  name: 'description',
  id: 'description',
};
const selectCurrency = {
  name: 'currency',
  id: 'currency',
  currencies: ['BRL'],
};
const selectMethod = {
  name: 'method',
  id: 'method',
  methods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
};
const selectTag = {
  name: 'tag',
  id: 'tag',
  tags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
};

class CostsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async save() {
    const { expenses, fullCurrencies } = this.props;
    expenses({ ...this.state, exchangeRates: await fullCurrencies() });
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  render() {
    const { coins } = this.props;
    return (
      <form>
        <Input
          inputLabel="Valor: "
          inputProps={ inputValues }
          onChange={ this.handleChange }
        />
        <Select
          selectLabel="Moeda: "
          selectProps={ selectCurrency }
          selectOptions={ coins }
          onChange={ this.handleChange }
        />
        <Select
          selectLabel="Método de pagamento: "
          selectProps={ selectMethod }
          selectOptions={ selectMethod.methods }
          onChange={ this.handleChange }
        />
        <Select
          selectLabel="Tag: "
          selectProps={ selectTag }
          selectOptions={ selectTag.tags }
          onChange={ this.handleChange }
        />
        <Input
          inputLabel="Descrição: "
          inputProps={ inputDescription }
          onChange={ this.handleChange }
        />
        <button onClick={ this.save } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: (result) => dispatch(fetchCurrencies(result)),
  expenses: (value) => dispatch(getExpenses(value)),
  fullCurrencies: (result) => dispatch(fetchAllCurrencies(result)),
});

CostsForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf.isRequired,
  expenses: PropTypes.objectOf.isRequired,
  fullCurrencies: PropTypes.objectOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CostsForm);
