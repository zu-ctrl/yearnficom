import React, { useState } from 'react'
import ProductInfo from '../productInfo/ProductInfo'
import VaultActionForm from '../vaultActionForm/VaultActionForm'
import VaultBlockChart from '../vaultBlockChart/VaultBlockChart'
import { Wrapper, Title, Shadow, ShadowWrapper } from './style'

const ProductActions = ({ currentAsset, isBeta }) => {
  const [shadowDisabled, setShadowDisabled] = useState(false)

  const onScroll = (e) => {
    setShadowDisabled(e.target.scrollHeight - e.target.scrollTop - 50 <= e.target.clientHeight)
  }

  return (
    <ShadowWrapper>
      <Wrapper onScroll={onScroll} isBeta={isBeta}>
        <ProductInfo asset={currentAsset} />
        <Title>DEPOSIT AND WITHDRAW</Title>
        <VaultActionForm asset={currentAsset} />
        <Title>VAULT STRATEGY</Title>
        <VaultBlockChart vaultGraphName={currentAsset.vaultGraphName} />
      </Wrapper>
      <Shadow shadowDisabled={shadowDisabled} />
    </ShadowWrapper>
  )
}

export default ProductActions
