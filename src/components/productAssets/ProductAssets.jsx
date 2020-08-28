import React, { useState } from 'react'
import ProductAssetsList from '../productAssetsList/ProductAssetsList'
import ProductAssetsSearch from '../productAssetsSearch/ProductAssetsSearch'
import { Container } from './style'

const ProductAssets = ({ assets, currentAsset, setCurrentAsset, currentTheme, isBeta }) => {
  const [filteredAssets, setFilteredAssets] = useState(assets)
  return (
    <Container isBeta={isBeta}>
      <ProductAssetsSearch assets={assets} setFilteredAssets={setFilteredAssets} currentTheme={currentTheme} />
      <ProductAssetsList
        assets={filteredAssets}
        currentAsset={currentAsset}
        setCurrentAsset={setCurrentAsset}
        currentTheme={currentTheme}
      />
    </Container>
  )
}

export default ProductAssets
