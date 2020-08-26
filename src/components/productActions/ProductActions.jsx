import React from 'react'
import ProductInfo from '../productInfo/ProductInfo'
import VaultActionForm from '../vaultActionForm/VaultActionForm'
import VaultBlockChart from '../vaultBlockChart/VaultBlockChart'

const ProductActions = ({ currentAsset }) => {
  return (
    <>
      <div>ProductActions</div>
      <ProductInfo asset={currentAsset} />
      <h2>DEPOSIT AND WITHDRAW</h2>
      <VaultActionForm asset={currentAsset} />
      {/* <h2>VAULT STRATEGY</h2> */}
      {/* <VaultBlockChart asset={currentAsset} /> */}
    </>
  )
}

export default ProductActions
