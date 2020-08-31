import React from 'react'
import ProductInfo from '../productInfo/ProductInfo'
import VaultActionForm from '../vaultActionForm/VaultActionForm'
import VaultBlockChart from '../vaultBlockChart/VaultBlockChart'
import { Wrapper, Title } from './style'

const ProductActions = ({ currentAsset, isBeta }) => {
  return (
    <Wrapper isBeta={isBeta}>
      <ProductInfo asset={currentAsset} />
      <Title>DEPOSIT AND WITHDRAW</Title>
      <VaultActionForm asset={currentAsset} />
      <Title>VAULT STRATEGY</Title>
      <VaultBlockChart vaultGraphName={currentAsset.vaultGraphName} />
    </Wrapper>
  )
}

export default ProductActions
