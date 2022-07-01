export const getResult = state => {
  // console.log('state1', state);
  return state.currency.result;
};

export const getRates = state => {
  console.log('state1', state);
  return state.currency.rates;
};
