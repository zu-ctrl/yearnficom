import React, { useState } from 'react'
import ProductAssetsList from '../productAssetsList/ProductAssetsList'
import ProductAssetsSearch from '../productAssetsSearch/ProductAssetsSearch'
import { Container } from './style'

const ProductAssets = ({ assets, currentAsset, setCurrentAsset, currentTheme }) => {
  const [filteredAssets, setFilteredAssets] = useState(assets)
  return (
    <Container>
      <h2>ProductAssets</h2>
      <ProductAssetsSearch assets={assets} setFilteredAssets={setFilteredAssets} currentTheme={currentTheme} />
      <ProductAssetsList assets={filteredAssets} currentAsset={currentAsset} setCurrentAsset={setCurrentAsset} />
    </Container>
  )
}

export default ProductAssets
