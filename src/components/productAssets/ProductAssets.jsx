import React, { useState } from 'react'
import ProductAssetsList from '../productAssetsList/ProductAssetsList'
import ProductAssetsSearch from '../productAssetsSearch/ProductAssetsSearch'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

import Select from '@material-ui/core/Select'
import { Container, SelectContainer } from './style'

const ProductAssets = ({ assets, currentAsset, setCurrentAsset, currentTheme, isBeta }) => {
  const [filteredAssets, setFilteredAssets] = useState(assets)
  const [sortBy, setSortBy] = useState('balance')

  const sortedAssets = () => {
    return filteredAssets.sort((a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy]))
  }

  return (
    <Container isBeta={isBeta}>
      <ProductAssetsSearch assets={assets} setFilteredAssets={setFilteredAssets} currentTheme={currentTheme} />
      <SelectContainer>
        <FormControl>
          <InputLabel>Sort by</InputLabel>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <MenuItem value='balance'>Balance</MenuItem>
            <MenuItem value='apy'>APY</MenuItem>
          </Select>
        </FormControl>
      </SelectContainer>
      <ProductAssetsList
        assets={sortedAssets()}
        currentAsset={currentAsset}
        setCurrentAsset={setCurrentAsset}
        currentTheme={currentTheme}
      />
    </Container>
  )
}

export default ProductAssets
