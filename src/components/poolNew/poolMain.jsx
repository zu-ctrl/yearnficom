import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Card,
  Typography,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withNamespaces } from 'react-i18next'
import { colors } from '../../theme'

import UnlockModal from '../unlock/unlockModal.jsx'
import Snackbar from '../snackbar'
import Asset from './assetNew'
import Loader from '../loader'

import {
  ERROR,
  GET_POOL_BALANCES,
  POOL_BALANCES_RETURNED,
  DEPOSIT_POOL_RETURNED,
  WITHDRAW_POOL_RETURNED,
  CONNECTION_CONNECTED,
  CONNECTION_DISCONNECTED,
} from '../../constants'

import Store from '../../stores'
const emitter = Store.emitter
const dispatcher = Store.dispatcher
const store = Store.store

const styles = (theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  investedContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: '100%',
    marginTop: '40px',
    [theme.breakpoints.up('md')]: {
      minWidth: '900px',
    },
  },
  balancesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    padding: '12px 12px',
    position: 'relative',
  },
  connectContainer: {
    padding: '12px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '450px',
    [theme.breakpoints.up('md')]: {
      width: '450',
    },
  },
  intro: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '32px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      maxWidth: 'calc(100vw - 24px)',
    },
  },
  introCenter: {
    maxWidth: '500px',
    textAlign: 'center',
    display: 'flex',
    padding: '48px 0px',
  },
  introText: {
    paddingLeft: '20px',
  },
  actionButton: {
    '&:hover': {
      backgroundColor: '#2F80ED',
    },
    padding: '12px',
    backgroundColor: '#2F80ED',
    border: '1px solid #E1E1E1',
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      padding: '15px',
    },
  },
  overlay: {
    position: 'absolute',
    borderRadius: '10px',
    background: 'RGBA(200, 200, 200, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #aaa',
    cursor: 'pointer',

    right: '0px',
    top: '10px',
    height: '70px',
    width: '160px',
    [theme.breakpoints.up('md')]: {
      right: '0px',
      top: '10px',
      height: '90px',
      width: '210px',
    },
  },
  heading: {
    display: 'none',
    paddingTop: '12px',
    flex: 1,
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      paddingTop: '5px',
      display: 'block',
    },
  },
  headingName: {
    paddingTop: '5px',
    flex: 2,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    minWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 'auto',
    },
  },
  buttonText: {
    fontWeight: '700',
    color: 'white',
  },
  assetSummary: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap',
    },
  },
  assetIcon: {
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    borderRadius: '20px',
    height: '30px',
    width: '30px',
    textAlign: 'center',
    cursor: 'pointer',
    marginRight: '20px',
    [theme.breakpoints.up('sm')]: {
      height: '40px',
      width: '40px',
      marginRight: '24px',
    },
  },
  addressContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'hidden',
    flex: 1,
    whiteSpace: 'nowrap',
    fontSize: '0.83rem',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    padding: '28px 30px',
    borderRadius: '50px',
    border: '1px solid ' + colors.borderBlue,
    alignItems: 'center',
    maxWidth: '450px',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  between: {
    width: '40px',
  },
  expansionPanel: {
    maxWidth: 'calc(100vw - 24px)',
    width: '100%',
  },
  versionToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tableHeadContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  investAllContainer: {
    paddingTop: '24px',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  disaclaimer: {
    padding: '12px',
    border: '1px solid rgb(174, 174, 174)',
    borderRadius: '0.75rem',
    marginBottom: '24px',
    lineHeight: '1.2',
  },
  fees: {
    paddingRight: '75px',
    padding: '12px',
    lineHeight: '1.2',
  },
  walletAddress: {
    padding: '0px 12px',
  },
  walletTitle: {
    flex: 1,
    color: colors.darkGray,
  },
  grey: {
    color: colors.darkGray,
  },
})

class PoolMain extends Component {
  constructor(props) {
    super()

    const account = store.getStore('account')
    props.setAccountGlobal(account)
    const assets = store.getStore('poolAssets')
    console.log({ assets })

    this.state = {
      assets,
      currentAsset: assets[0],
      account: account,
      modalOpen: false,
      snackbarType: null,
      snackbarMessage: null,
      value: 1,
      refreshTimer: null
    }

    if (account && account.address) {
      dispatcher.dispatch({ type: GET_POOL_BALANCES, content: {} })
    }
  }
  componentWillMount() {
    emitter.on(DEPOSIT_POOL_RETURNED, this.showHash)
    emitter.on(WITHDRAW_POOL_RETURNED, this.showHash)
    emitter.on(ERROR, this.errorReturned)
    emitter.on(POOL_BALANCES_RETURNED, this.balancesReturned)
    emitter.on(CONNECTION_CONNECTED, this.connectionConnected)
    emitter.on(CONNECTION_DISCONNECTED, this.connectionDisconnected)
  }

  componentWillUnmount() {
    const { refreshTimer } = this.state
    clearTimeout(refreshTimer)
    emitter.removeListener(DEPOSIT_POOL_RETURNED, this.showHash)
    emitter.removeListener(WITHDRAW_POOL_RETURNED, this.showHash)
    emitter.removeListener(ERROR, this.errorReturned)
    emitter.removeListener(CONNECTION_CONNECTED, this.connectionConnected)
    emitter.removeListener(CONNECTION_DISCONNECTED, this.connectionDisconnected)
    emitter.removeListener(POOL_BALANCES_RETURNED, this.balancesReturned)
  }

  refresh() {
    dispatcher.dispatch({ type: GET_POOL_BALANCES, content: {} })
  }

  balancesReturned = (balances) => {
    const _refreshTimer = setTimeout(this.refresh, 30000)
    this.setState({ assets: store.getStore('poolAssets'), refreshTimer: _refreshTimer })
  }

  connectionConnected = () => {
    const { t, setAccountGlobal } = this.props
    const acc = store.getStore('account')
    this.setState({ account: acc })
    setAccountGlobal(acc)

    dispatcher.dispatch({ type: GET_POOL_BALANCES, content: {} })

    const that = this
    setTimeout(() => {
      const snackbarObj = { snackbarMessage: t('Unlock.WalletConnected'), snackbarType: 'Info' }
      that.setState(snackbarObj)
    })
  }

  connectionDisconnected = () => {
    const { setAccountGlobal } = this.props
    const { refreshTimer } = this.state
    clearTimeout(refreshTimer)
    const acc = store.getStore('account')
    this.setState({ account: acc, refreshTimer: null })
    setAccountGlobal(acc)
    console.log('DISCONNECTED')
  }

  errorReturned = (error) => {
    const snackbarObj = { snackbarMessage: null, snackbarType: null }
    this.setState(snackbarObj)
    this.setState({ loading: false })
    const that = this
    setTimeout(() => {
      const snackbarObj = { snackbarMessage: error.toString(), snackbarType: 'Error' }
      that.setState(snackbarObj)
    })
  }

  showHash = (txHash) => {
    const snackbarObj = { snackbarMessage: null, snackbarType: null }
    this.setState(snackbarObj)
    this.setState({ loading: false })
    const that = this
    setTimeout(() => {
      const snackbarObj = { snackbarMessage: txHash, snackbarType: 'Hash' }
      that.setState(snackbarObj)
    })
  }

  render() {
    const { classes, t } = this.props
    const { loading, account, modalOpen, snackbarMessage, currentAsset } = this.state

    var address = null
    if (account.address) {
      address =
        account.address.substring(0, 6) +
        '...' +
        account.address.substring(account.address.length - 4, account.address.length)
    }

    return (
      <div className={classes.root}>
        <img src={require(`../../assets/bg-waves.svg`)} alt="" />
        <img src={require(`../../assets/bg-waves.svg`)} style={{ transform: 'rotateY(180deg)' }} alt="" />
        <div className={classes.investedContainer}>
          {!account.address && (
            <div className={classes.introCenter}>
              <Typography variant="h3">Vaults. Simple.</Typography>
            </div>
          )}
          {!account.address && (
            <div className={classes.connectContainer}>
              <Button
                className={classes.actionButton}
                variant="outlined"
                color="primary"
                disabled={loading}
                onClick={this.overlayClicked}
              >
                <Typography className={classes.buttonText} variant={'h5'}>
                  {t('InvestSimple.Connect')}
                </Typography>
              </Button>
            </div>
          )}
          {account.address && <Asset asset={currentAsset} startLoading={this.startLoading} />}
          {account.address && (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Asset</TableCell>
                    <TableCell align="right">Details</TableCell>
                    <TableCell align="right">Annialized ROI</TableCell>
                    <TableCell align="right">Wallet Balance</TableCell>
                    <TableCell align="right">Deployed Balance</TableCell>
                    <TableCell align="right">LP Token Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{this.renderAssetBlocks()}</TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
        {loading && <Loader />}
        {modalOpen && this.renderModal()}
        {snackbarMessage && this.renderSnackbar()}
      </div>
    )
  }

  onChange = (event) => {
    let val = []
    val[event.target.id] = event.target.checked
    this.setState(val)
  }

  renderAssetBlocks = () => {
    const { assets, expanded, currentAsset } = this.state
    const { classes } = this.props
    const width = window.innerWidth

    return assets.map((asset) => {
      return (
        <TableRow key={asset.id} onClick={() => this.setState({ currentAsset: asset })}>
          <TableCell component="th" scope="row">
            <img src={require(`../../assets/${currentAsset.id === asset.id ? 'check' : 'no-check'}.svg`)} alt="" />
            <Avatar>
              <img
                alt=""
                src={require('../../assets/' + asset.symbol + '-logo.png')}
                height={'40px'}
                style={asset.disabled ? { filter: 'grayscale(100%)' } : {}}
              />
            </Avatar>
            <span>{asset.id}</span>
          </TableCell>
          <TableCell align="right">{asset.description}</TableCell>
          <TableCell align="right">
            {['LINK'].includes(asset.id) ? 'Not Available' : `${asset.apy ? asset.apy.toFixed(4) : '0.0000'}%`}
          </TableCell>
          <TableCell align="right">
            {(asset.balance ? asset.balance.toFixed(4) : '0.0000') + ' ' + asset.symbol}
          </TableCell>
          <TableCell align="right">
            {asset.pooledBalance
              ? (Math.floor(asset.pooledBalance * asset.pricePerFullShare * 10000) / 10000).toFixed(4)
              : '0.0000'}{' '}
            {asset.symbol}
          </TableCell>
          <TableCell align="right">
            {asset.pooledBalance ? (Math.floor(asset.pooledBalance * 10000) / 10000).toFixed(4) : '0.0000'}{' '}
            {asset.poolSymbol}
          </TableCell>
        </TableRow>
      )
    })
  }

  handleChange = (id) => {
    this.setState({ expanded: this.state.expanded === id ? null : id })
  }

  startLoading = () => {
    this.setState({ loading: true })
  }

  renderSnackbar = () => {
    var { snackbarType, snackbarMessage } = this.state
    return <Snackbar type={snackbarType} message={snackbarMessage} open={true} />
  }

  renderModal = () => {
    return <UnlockModal closeModal={this.closeModal} modalOpen={this.state.modalOpen} />
  }

  overlayClicked = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }
}

export default withNamespaces()(withRouter(withStyles(styles)(PoolMain)))