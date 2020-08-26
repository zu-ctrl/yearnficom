import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const ProductAssetsList = ({ assets, currentAsset, setCurrentAsset }) => {
  return (
    <ul>
      {assets.map((asset, i) => {
        return (
          <li
            key={i}
            style={{ color: currentAsset.symbol === asset.symbol ? 'red' : 'black' }}
            onClick={() => setCurrentAsset(asset)}
          >
            <img
              alt=''
              src={require('../../assets/' + asset.symbol + '-logo.png')}
              height={'24px'}
              style={asset.disabled ? { filter: 'grayscale(100%)' } : {}}
            />
            <div>{asset.symbol}</div>
            <div>{asset.description}</div>
            <div>{asset.apy ? `${asset.apy.toFixed(4)}%` : <Skeleton />}</div>
            <div>{`${asset.balance ? asset.balance.toFixed(4) : '0.0000'} ${asset.symbol}`}</div>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductAssetsList
