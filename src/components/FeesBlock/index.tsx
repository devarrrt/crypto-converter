import React, { FC } from 'react'

import './styles.scss'

interface FeesBlockProps {
    networkFee: string;
    c14Fee: string;
    totalFee: string;
}

const FeesBlock: FC<FeesBlockProps> = ({ networkFee,
    c14Fee,
    totalFee, }) => {
    return (
        <div className='root'>
            <h2 className='feesTitle'>Fees</h2>
            <div className='block'>
                <div className='feeItem'>
                    <span>Network Fee</span>
                    <b data-testid="network">{networkFee}$</b>
                </div>
                <h3>+</h3>
                <div className='feeItem'>
                    <span>C14 Fee</span>
                    <b data-testid="c14">{c14Fee}$</b>
                </div>
                <h3>=</h3>
                <div className='feeItem'>
                    <span>Total Fee</span>
                    <b data-testid="total">{totalFee}$</b>
                </div>
            </div>
        </div>
    )
}

export default FeesBlock