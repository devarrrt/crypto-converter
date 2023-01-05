import React from 'react';

import './style.scss';

type currencyBlockProps = {
  subtitle: string;
  currencyName: string;
  currencyIcon: string;
  value: number;
  onChangeValue: (value: number) => void;
};

const CurrencyBlock: React.FC<currencyBlockProps> = ({
  subtitle,
  currencyName,
  currencyIcon,
  value,
  onChangeValue,
}) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      onChangeValue(value);
    }
  };

  return (
    <>
      <div className="currencyBlock">
        <p>{subtitle}</p>
        <div className="currencyBlockBottom">
          <input
            className="currencyBlockInput"
            type="number"
            value={value}
            onChange={handleChangeInput}
          />
          <div className="currencyBlockInfo">
            <h5> {currencyName} </h5>
            <img src={`/assets/${currencyIcon}.png`} alt="currency" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyBlock;
