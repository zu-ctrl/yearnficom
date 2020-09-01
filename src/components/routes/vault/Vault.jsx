import React from 'react'
import { withNamespaces } from 'react-i18next'
import ProductAssets from '../../productAssets/ProductAssets'
import ProductActions from '../../productActions/ProductActions'
import VaultInstructions from '../../vaultInstructions/VaultInstructions'
import { Container, MainWrapper, Shadow } from './style'

const Vault = ({ t, currentTheme, assets, currentAsset, setCurrentAsset, isBeta }) => {
  return (
    <Container>
      <MainWrapper isBeta={isBeta}>
        <ProductAssets
          isBeta={isBeta}
          assets={assets}
          currentAsset={currentAsset}
          currentTheme={currentTheme}
          setCurrentAsset={setCurrentAsset}
        />
        {currentAsset ? <ProductActions isBeta={isBeta} currentAsset={currentAsset} /> : <VaultInstructions />}
      </MainWrapper>
      <Shadow />
    </Container>
  )
}

export default withNamespaces()(Vault)
