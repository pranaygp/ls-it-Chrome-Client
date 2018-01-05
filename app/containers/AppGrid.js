import React, { Component } from 'react';
import etherscan from '@theblock/etherscan-promise';

import * as blockchainInfo from '../apis/blockchain-info';
import * as ripple from '../apis/ripple';

const ETH_DECIMALS = 1e18;
const BTC_DECIMALS = 1e8;

const ETHER_ADDRESSES = [
  '0x3E3a27a7097182FcB147d320d4094c05914a8fFF',
  '0xEa4EBede8b4E913Dc987dCE83553b7a5A0009801'
];
const BITCOIN_ADDRESSES = [
  '1DX9D9eJpbZqNdc29UgML1J3x6MjJNqaqd',
  '13pMH7ouKQsKHJJ89JLQTBV1ThhM8W8NiD'
];
const RIPPLE_ADDRESSES = [
  'rBXuBtsjZvWq7afyxdqefaM1re8kRUzHM9'
];

class AppGrid extends Component {
  state = {
    eth: 0,
    btc: 0,
    xrp: 0,
    adst: 33
  }

  async componentDidMount() {
    const ethBalances = await etherscan.account.balances(ETHER_ADDRESSES);
    const { data: btcBalances } = await blockchainInfo.getBalances(BITCOIN_ADDRESSES);
    const rippleBalances = await ripple.getBalances(RIPPLE_ADDRESSES);

    this.setState({
      eth: ethBalances.reduce((p, { balance }) => p + Number(balance), 0) / ETH_DECIMALS,
      btc: btcBalances.addresses.reduce((p, { final_balance }) => p + final_balance, 0) / BTC_DECIMALS,
      xrp: rippleBalances.reduce((p, { data }) => p + data.balances.reduce((pB, { value }) => pB + value, 0), 0) / 1
    });
  }

  render() {
    return (
      <div>
        ETH Holdings: {this.state.eth} <br />
        BTC Holdings: {this.state.btc} <br />
        XRP Holdings: {this.state.xrp} <br />
        ADST Holdings: {this.state.adst} <br />
      </div>
    );
  }
}

export default AppGrid;