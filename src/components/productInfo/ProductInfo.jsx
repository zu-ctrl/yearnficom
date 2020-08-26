import React from 'react'
import PyEarnTable from '../pyEarnTable/PyEarnTable'

const ProductInfo = ({ asset }) => {
  return (
    <>
      <div>
        <div>
          <img
            alt=''
            src={require('../../assets/' + asset.symbol + '-logo.png')}
            height={'24px'}
            style={asset.disabled ? { filter: 'grayscale(100%)' } : {}}
          />
          <b>{asset.symbol}</b>
          <div>{asset.description}</div>
        </div>
        <PyEarnTable pyEarnData={asset.pyEarnData} />
      </div>
      <p>
        Deposit {asset.symbol} tokens in this Grow Vault to maximize profits with the best automated strategies for your
        asset at any time.
      </p>
    </>
  )
}

export default ProductInfo
