import React, { useState } from 'react'
import ProductAssetsList from '../productAssetsList/ProductAssetsList'
import ProductAssetsSearch from '../productAssetsSearch/ProductAssetsSearch'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

import Select from '@material-ui/core/Select'
import { Container, SelectContainer } from './style'

const ProductAssets = ({ assets, currentAsset, setCurrentAsset, currentTheme, isBeta }) => {
  const [select, setSelect] = useState('APY')

  const handleChange = (event) => {
    setSelect(event.target.value)
  }

  const [filteredAssets, setFilteredAssets] = useState(assets)
  return (
    <Container isBeta={isBeta}>
      <ProductAssetsSearch assets={assets} setFilteredAssets={setFilteredAssets} currentTheme={currentTheme} />
      <SelectContainer>
        <FormControl>
          <InputLabel id='select'>Sort by</InputLabel>
          <Select labelId='select' id='demo-simple-select' value={select} onChange={handleChange}>
            <MenuItem value='APY'>APY</MenuItem>
            <MenuItem value='Balance'>Balance</MenuItem>
            <MenuItem value='Name'>Name</MenuItem>
          </Select>
        </FormControl>
      </SelectContainer>
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
