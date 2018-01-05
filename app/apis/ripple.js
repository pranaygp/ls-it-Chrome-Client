import axios from 'axios';

export function getBalances(addresses) {
  return Promise.all(addresses.map(address => axios.get(`https://data.ripple.com/v2/accounts/${address}/balances`)));
}