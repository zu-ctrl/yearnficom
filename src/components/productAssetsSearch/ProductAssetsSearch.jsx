import React, { useState, useEffect, useCallback } from 'react'
import SearchIcon from '../icons/SearchIcon'
import FilterIcon from '../icons/FilterIcon'

import { Container, InputContainer, Input } from './style'

const ProductAssetsSearch = ({ assets, setFilteredAssets, currentTheme }) => {
  const { searchIcon } = currentTheme
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
    <Container>
      <InputContainer>
        <SearchIcon color={searchIcon} />
        <Input type='text' placeholder='Search' onChange={(e) => setQuery(e.currentTarget.value)} />
      </InputContainer>
      <FilterIcon color={searchIcon} />
    </Container>
  )
}

export default ProductAssetsSearch
