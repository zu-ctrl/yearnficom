import React, { useState } from 'react'
import ProductAssetsList from '../productAssetsList/ProductAssetsList'
import ProductAssetsSearch from '../productAssetsSearch/ProductAssetsSearch'

const ProductAssets = ({ assets, currentAsset, setCurrentAsset }) => {
  const [filteredAssets, setFilteredAssets] = useState(assets)
  return (
    <div>
      <h2>ProductAssets</h2>
      <ProductAssetsSearch assets={assets} setFilteredAssets={setFilteredAssets} />
      <ProductAssetsList assets={filteredAssets} currentAsset={currentAsset} setCurrentAsset={setCurrentAsset} />
    </div>
  )
}

export default ProductAssets
