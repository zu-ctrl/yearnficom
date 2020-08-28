import React from 'react'
import { withNamespaces } from 'react-i18next'
import ProductAssets from '../../productAssets/ProductAssets'
import ProductActions from '../../productActions/ProductActions'
import { Container, MainWrapper } from './style'

const Vault = ({ t, currentTheme, assets, currentAsset, setCurrentAsset }) => {
  return (
    <Container>
      <MainWrapper>
        <ProductAssets
          assets={assets}
          currentAsset={currentAsset}
          currentTheme={currentTheme}
          setCurrentAsset={setCurrentAsset}
        />
        <ProductActions currentAsset={currentAsset} />
      </MainWrapper>
    </Container>
  )
}

export default withNamespaces()(Vault)
