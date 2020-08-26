import React, { useState, useEffect, useCallback } from 'react'

const ProductAssetsSearch = ({ assets, setFilteredAssets }) => {
  const [query, setQuery] = useState('')
  const setFilteredAssetsCb = useCallback(() => {
    setFilteredAssets(
      assets.filter(
        (a) =>
          a.symbol.toLowerCase().includes(query.toLowerCase()) ||
          a.description.toLowerCase().includes(query.toLowerCase())
      )
    )
  }, [query, assets, setFilteredAssets])
  useEffect(() => {
    setFilteredAssetsCb()
  }, [setFilteredAssetsCb])
  return (
    <div>
      <input type='text' onChange={(e) => setQuery(e.currentTarget.value)} />
    </div>
  )
}

export default ProductAssetsSearch
