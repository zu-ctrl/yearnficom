import React, { useState } from 'react'
import { withNamespaces } from 'react-i18next'
import ProductAssets from '../../productAssets/ProductAssets'
import ProductActions from '../../productActions/ProductActions'
import VaultInstructions from '../../vaultInstructions/VaultInstructions'
import { Container, MainWrapper, Shadow } from './style'

const Vault = ({ t, currentTheme, assets, currentAsset, setCurrentAsset, isBeta }) => {
  const [shadowDisabled, setShadowDisabled] = useState(false)

  const onScroll = (e) => {
    setShadowDisabled(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight)
  }
  return (
    <Container>
      <MainWrapper onScroll={onScroll} isBeta={isBeta}>
        <ProductAssets
          isBeta={isBeta}
          assets={assets}
          currentAsset={currentAsset}
          currentTheme={currentTheme}
          setCurrentAsset={setCurrentAsset}
        />
        {currentAsset ? (
          <ProductActions isBeta={isBeta} currentAsset={currentAsset} />
        ) : (
          <VaultInstructions isBeta={isBeta} currentTheme={currentTheme} />
        )}
      </MainWrapper>
      <Shadow shadowDisabled={shadowDisabled} />
    </Container>
  )
}

export default withNamespaces()(Vault)
