import axios from 'axios';

export function getBalances(addresses) {
  const addressString = addresses.join('|');
  return axios.get(`https://blockchain.info/multiaddr?active=${addressString}&cors=true`)
}