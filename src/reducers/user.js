const INICIAL_STATE = {
  email: '',
};

function user(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return { email: action.value };
  default:
    return state;
  }
}

export default user;
