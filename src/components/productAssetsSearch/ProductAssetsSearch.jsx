import React, { useState, useEffect } from 'react'

const ProductAssetsSearch = ({ assets, setFilteredAssets }) => {
  const [query, setQuery] = useState('')
  useEffect(() => {
    setFilteredAssets(
      assets.filter(
        (a) =>
          a.symbol.toLowerCase().includes(query.toLowerCase()) ||
          a.description.toLowerCase().includes(query.toLowerCase())
      )
    )
  }, [query])
  return (
    <div>
      <input type='text' onChange={(e) => setQuery(e.currentTarget.value)} />
    </div>
  )
}

export default ProductAssetsSearch
