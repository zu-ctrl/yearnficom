import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const vaultBlockChart = ({ vaultGraphName }) => {
  return (
    <div>
      {!vaultGraphName ? (
        <Skeleton animation='wave' variant='rect' style={{ height: '200px' }} />
      ) : (
        <img alt='' src={require(`../../assets/graph-${vaultGraphName}.png`)} />
      )}
    </div>
  )
}

export default vaultBlockChart
