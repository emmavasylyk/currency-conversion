// const BASE_URL = 'https://api.getgeoapi.com/v2/currency';
// const API_KEY = 'acee8ddc5c9a0d81ce9494362788ca5971740034';

// async function fetchCurrency(url = '') {
//   const response = await fetch(url);
//   return response.ok ? await response.json() : Promise.reject(new Error());
// }

// export function fetchCurrencyConvension(from, to, input) {
//   return fetchCurrency(`${BASE_URL}/convert?api_key=${API_KEY}&from=${from}&to=${to}
// &amount=${input}&format=json`);
// }

// export function fetchCurrencyList() {
//   return fetchCurrency(`${BASE_URL}/list?api_key=${API_KEY}&format=json`);
// }

// const API = { fetchCurrency };

// export default API;
const BASE_URL = 'https://api.exchangerate.host';
// const BASE_USD = 'USD';

async function fetchCurrency(url = '') {
  const response = await fetch(url);
  console.log('response', response);
  return response.ok ? await response.json() : Promise.reject(new Error());
}
// https://api.exchangerate.host/latest
export function fetchCurrencyLatest(base, input) {
  return fetchCurrency(
    `${BASE_URL}/latest&base=${base}&symbols=USD,EUR,CZK&amount=${input}`,
  );
}

// https://api.exchangerate.host/convert?from=USD&to=EUR
export function fetchCurrencyConvension(from, to, input) {
  return fetchCurrency(`${BASE_URL}/convert?from=${from}&to=${to}
&amount=${input}`);
}
