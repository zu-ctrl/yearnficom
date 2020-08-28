import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Ripples from 'react-ripples'
import {
  Asset,
  AssetWrapper,
  Container,
  Logo,
  Title,
  Description,
  Apy,
  ApyDescription,
  Total,
  Balance,
  Flex,
  WrapContainer,
} from './style'

const ProductAssetsList = ({ assets, currentAsset, setCurrentAsset, currentTheme }) => {
  const { menu } = currentTheme
  return (
    <Container>
      {assets.map((asset, i) => {
        return (
          <AssetWrapper key={i}>
            <Ripples color={menu.ripples}>
              <Asset select={currentAsset.symbol === asset.symbol} onClick={() => setCurrentAsset(asset)}>
                <WrapContainer>
                  <Logo>
                    <img
                      alt=''
                      src={require('../../assets/' + asset.symbol + '-logo.png')}
                      height={'24px'}
                      style={asset.disabled ? { filter: 'grayscale(100%)' } : {}}
                    />
                    <Title>{asset.symbol}</Title>
                  </Logo>
                  <Apy>
                    APY
                    <ApyDescription>{asset.apy ? `${asset.apy.toFixed(2)}%` : <Skeleton />}</ApyDescription>
                  </Apy>
                </WrapContainer>

                <Flex>
                  <Description>{asset.description}</Description>
                  <Total>
                    Total Balance
                    <Balance>{`${asset.balance ? asset.balance.toFixed(4) : '0.0000'}`}</Balance>
                  </Total>
                </Flex>
              </Asset>
            </Ripples>
          </AssetWrapper>
        )
      })}
    </Container>
  )
}

export default ProductAssetsList
