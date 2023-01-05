import React from 'react';
import { useDebounce } from './hooks/useDebounce';

import CurrencyBlock from './components/CurrencyBlock';
import FeesBlock from './components/FeesBlock';

import { useGetData } from './hooks/useGetData';

const App = () => {
  const { fethQuote, payValue, receiveValue, setPayValue, setReceiveValue, fees } = useGetData();

  useDebounce({
    fn: () => fethQuote(payValue, true),
    delay: 500,
    deps: [payValue],
    isSource: true,
  });

  return (
    <div className="appContaiter">
      <h3 className="appTitle"> Select your amount</h3>
      <CurrencyBlock
        subtitle="Your pay"
        currencyName="USD"
        currencyIcon="usd"
        value={payValue}
        onChangeValue={(e) => setPayValue(e)}
      />

      <FeesBlock
        networkFee={fees?.fiat_blockchain_fee}
        c14Fee={fees?.absolute_internal_fee}
        totalFee={fees?.total_fee}
      />

      <CurrencyBlock
        subtitle="Your receive"
        currencyName="USDS EVMOS"
        currencyIcon="evmos"
        value={receiveValue}
        onChangeValue={(e) => setReceiveValue(e)}
      />
      <button className="buttonsBuy">Buy now</button>
    </div>
  );
};

export default App;
