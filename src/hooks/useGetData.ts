import axios from 'axios';
import { useState } from 'react';

const TARGET_ASSET_ID = 'b2384bf2-b14d-4916-aa97-85633ef05742';

export const useGetData = () => {
  const [payValue, setPayValue] = useState(500);
  const [receiveValue, setReceiveValue] = useState(100);
  const [fees, setFees] = useState({
    fiat_blockchain_fee: '0',
    absolute_internal_fee: '0',
    total_fee: '0',
  });

  const fethQuote = async (amount: number, isSoure: boolean) => {
    try {
      const { data } = await axios.post('https://api-qjoa5a5qtq-uc.a.run.app/quotes', {
        source_currency: 'USD',
        target_crypto_asset_id: TARGET_ASSET_ID,
        [isSoure ? 'source_amount' : 'target_amount']: String(amount),
      });

      setFees({
        fiat_blockchain_fee: data.fiat_blockchain_fee,
        absolute_internal_fee: data.absolute_internal_fee,
        total_fee: data.total_fee,
      });

      if (isSoure) {
        setReceiveValue(Number(data.target_amount));
      } else {
        setPayValue(Number(data.source_amount));
      }
    } catch {
      //   alert('Please check your data')
    }
  };

  return { fethQuote, payValue, receiveValue, setPayValue, setReceiveValue, fees };
};
