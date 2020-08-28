import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Wrapper } from './style'

const VaultBlockChart = ({ vaultGraphName }) => {
  return (
    <Wrapper>
      {!vaultGraphName ? (
        <Skeleton animation='wave' variant='rect' style={{ height: '200px' }} />
      ) : (
        <img alt='' src={require(`../../assets/graph-${vaultGraphName}.png`)} />
      )}
    </Wrapper>
  )
}

export default VaultBlockChart
