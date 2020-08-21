import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { withNamespaces } from 'react-i18next'
import TopBar from '../topBar'
import PoolMain from './poolMain'

const styles = (theme) => ({})

const Pool = ({ history, accGlobal, setAccGlobal }) => {
  return (
    <div>
      <TopBar
        currentPage={history.location.pathname}
        nav={(slag) => history.push(slag)}
        account={accGlobal}
        pageTitle="Harvest DeFi Yield Opportunities on Autopilot"
        pageSubtitle="Maximize profits with the best growth strategy for your asset at any time"
      />
      <PoolMain setAccountGlobal={(acc) => setAccGlobal(acc)} />
    </div>
  )
}

export default withNamespaces()(withRouter(withStyles(styles)(Pool)))