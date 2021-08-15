export const saveEmail = (value) => ({
  type: 'SAVE_EMAIL',
  value,
});

export const getCurrencies = (result) => ({
  type: 'GET_CURRENCIES',
  currencies: result,
});

export const getExpenses = (value) => ({
  type: 'GET_EXPENSES',
  expenses: value,
});

export const removeExpense = (value) => ({
  type: 'REMOVE_EXPENSE',
  value,
});

// export const editExpense = (value) => ({
//   type: 'EDIT_EXPENSE',
//   value,
// })

export const getFullCurrencies = (result) => ({
  type: 'GET_FULL_CURRENCIES',
  fullCurrencies: result,
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  const result = Object.keys(json).filter((currency) => currency !== 'USDT');
  try {
    dispatch(getCurrencies(result));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchAllCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  try {
    dispatch(getFullCurrencies(json));
    return json;
  } catch (err) {
    throw new Error(err);
  }
};
