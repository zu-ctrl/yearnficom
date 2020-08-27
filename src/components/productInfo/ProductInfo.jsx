import React from 'react'
import PyEarnTable from '../pyEarnTable/PyEarnTable'
import { Title, Logo, Description, Container, FlexStart, InfoText, LinkInfo } from './style'

const ProductInfo = ({ asset }) => {
  return (
    <Container>
      <FlexStart>
        <div>
          <Logo>
            <img
              alt=''
              src={require('../../assets/' + asset.symbol + '-logo.png')}
              height={'24px'}
              style={asset.disabled ? { filter: 'grayscale(100%)' } : {}}
            />
            <Title>{asset.symbol}</Title>
          </Logo>
          <Description>{asset.description}</Description>
        </div>
        <PyEarnTable pyEarnData={asset.pyEarnData} />
      </FlexStart>
      <InfoText>
        Deposit {asset.symbol} tokens in this Grow Vault to maximize profits with the best automated strategies for your
        asset at any time.
      </InfoText>
      <LinkInfo href='#'>Show tutorial...</LinkInfo>
    </Container>
  )
}

export default ProductInfo
