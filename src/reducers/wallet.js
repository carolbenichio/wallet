const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  fullCurrencies: {},
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return { ...state, currencies: action.currencies };
  case 'GET_EXPENSES':
    return { ...state, expenses: [...state.expenses, action.expenses] };
  case 'GET_FULL_CURRENCIES':
    return { ...state, fullCurrencies: action.fullCurrencies };
  case 'REMOVE_EXPENSE':
    return { ...state, expenses: action.value };
  // case 'EDIT_EXPENSE':
  //   return { ...state, expenses: action.value }
  default:
    return state;
  }
}

export default wallet;
