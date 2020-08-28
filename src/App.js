import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import IpfsRouter from 'ipfs-react-router'
import axios from 'axios'
import { injected } from './stores/connectors'
import { withNamespaces } from 'react-i18next'
import {
  ERROR,
  GET_POOL_BALANCES,
  POOL_BALANCES_RETURNED,
  DEPOSIT_POOL_RETURNED,
  WITHDRAW_POOL_RETURNED,
  CONNECTION_CONNECTED,
  CONNECTION_DISCONNECTED,
} from './constants/constants'
import Store from './stores/store'
import BetaBanner from './components/betaBanner/BetaBanner'
import Main from './components/main/Main'
import FloatingActions from './components/floatingActions/FloatingActions'
import ThemeChooser from './components/themeChooser/ThemeChooser'
import LangChooser from './components/langChooser/LangChooser'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme/index'
import Menu from './components/menu/Menu'
import Vault from './components/routes/vault/Vault'
import UnlockModal from './components/unlock/unlockModal'
import Snackbar from './components/common/snackbar/Snackbar'
import Loader from './components/common/loader/Loader'
import Login from './components/login/Login'
import './i18n'

const emitter = Store.emitter
const dispatcher = Store.dispatcher
const store = Store.store

const App = ({ t }) => {
  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('en')
  const [account, setAccount] = useState(store.getStore('account'))
  const [isBeta, setIsBeta] = useState(localStorage.getItem('yearnfiBeta') !== 'false')
  const [modalOpen, setModalOpen] = useState(false)
  const [assets, setAssets] = useState(store.getStore('poolAssets'))
  const [currentAsset, setCurrentAsset] = useState(assets[0])
  const [snackbarType, setSnackbarType] = useState(null)
  const [snackbarMessage, setSnackbarMessage] = useState(null)
  const [refreshTimer, setRefreshTimer] = useState(null)
  const [loading, setLoading] = useState(true)

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  const refresh = () => {
    dispatcher.dispatch({ type: GET_POOL_BALANCES, content: {} })
  }

  const balancesReturned = async () => {
    let updatedAssets = store.getStore('poolAssets')
    // ADD GRAPHS TO ASSETS
    updatedAssets = updatedAssets.map((asset) => {
      const mapObj = {
        YFI: 'yfi',
        yCRV: 'ycurve',
        DAI: 'stablecoin',
        TUSD: 'stablecoin',
        USDC: 'stablecoin',
        USDT: 'stablecoin',
        aLINK: 'link',
        LINK: 'link',
      }
      asset.vaultGraphName = mapObj[asset.symbol]
      return asset
    })
    // ADD PYEARN DATA TO ASSETS
    try {
      const {
        body: { data: pyEarnArr },
      } = (
        await axios({
          url: '/api/pyearn',
          method: 'GET',
        })
      ).data
      updatedAssets = assets.map((a) => {
        const obj = pyEarnArr.find((d) => d.symbol === a.poolSymbol)
        if (!obj) {
          a.pyEarnData = { day: 'N/A', week: 'N/A', month: 'N/A', year: 'N/A' }
        } else {
          a.pyEarnData = { ...obj.pyEarnData }
        }
        return a
      })
    } catch (e) {
      console.error('[pyearn]', e.toString())
    }
    console.log({ updatedAssets })
    setAssets(updatedAssets)
    setRefreshTimer(setTimeout(refresh, 300000))
  }

  const connectionConnected = () => {
    setAccount(store.getStore('account'))
    dispatcher.dispatch({ type: GET_POOL_BALANCES, content: {} })
    setTimeout(() => {
      setSnackbarType('Info')
      setSnackbarMessage(t('Unlock.WalletConnected'))
    })
    console.info('CONNECTED')
  }

  const connectionDisconnected = () => {
    clearTimeout(refreshTimer)
    setAccount(store.getStore('account'))
    setRefreshTimer(null)
    console.info('DISCONNECTED')
  }

  const errorReturned = (error) => {
    setSnackbarType(null)
    setSnackbarMessage(null)
    setLoading(false)
    setTimeout(() => {
      setSnackbarType('Error')
      setSnackbarMessage(error.toString())
    })
  }

  const showHash = (txHash) => {
    setSnackbarType(null)
    setSnackbarMessage(null)
    setLoading(false)
    setTimeout(() => {
      setSnackbarType('Hash')
      setSnackbarMessage(txHash)
    })
  }

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        injected
          .activate()
          .then((a) => {
            store.setStore({
              account: { address: a.account },
              web3context: { library: { provider: a.provider } },
            })
            emitter.emit(CONNECTION_CONNECTED)
            console.log(a)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    })
    setAccount(store.getStore('account'))
    if (account && account.address) {
      dispatcher.dispatch({ type: GET_POOL_BALANCES, content: {} })
    }
    emitter.on(DEPOSIT_POOL_RETURNED, showHash)
    emitter.on(WITHDRAW_POOL_RETURNED, showHash)
    emitter.on(ERROR, errorReturned)
    emitter.on(POOL_BALANCES_RETURNED, balancesReturned)
    emitter.on(CONNECTION_CONNECTED, connectionConnected)
    emitter.on(CONNECTION_DISCONNECTED, connectionDisconnected)
    setLoading(false)
    return () => {
      clearTimeout(refreshTimer)
      emitter.removeListener(DEPOSIT_POOL_RETURNED, showHash)
      emitter.removeListener(WITHDRAW_POOL_RETURNED, showHash)
      emitter.removeListener(ERROR, errorReturned)
      emitter.removeListener(CONNECTION_CONNECTED, connectionConnected)
      emitter.removeListener(CONNECTION_DISCONNECTED, connectionDisconnected)
      emitter.removeListener(POOL_BALANCES_RETURNED, balancesReturned)
      setLoading(false)
    }
  }, []) // eslint-disable-line

  return (
    <ThemeProvider theme={currentTheme}>
      <IpfsRouter>
        <BetaBanner isBeta={isBeta} setIsBeta={setIsBeta} currentTheme={currentTheme} />
        {!account || !account.address ? (
          <Login setModalOpen={setModalOpen} />
        ) : (
          <Main>
            <FloatingActions>
              <ThemeChooser theme={theme} setTheme={setTheme} />
              <LangChooser lang={lang} setLang={setLang} />
            </FloatingActions>
            <Menu currentTheme={currentTheme} account={account} setModalOpen={setModalOpen} />
            <Switch>
              <Route path='/vault'>
                <Vault
                  account={account}
                  assets={assets}
                  currentTheme={currentTheme}
                  setAccount={setAccount}
                  currentAsset={currentAsset}
                  setCurrentAsset={setCurrentAsset}
                />
              </Route>
              <Route path='/zap'>
                <Redirect to='/vault' />
              </Route>
              <Route path='/earn'>
                <Redirect to='/vault' />
              </Route>
              <Route path='/cover'>
                <Redirect to='/vault' />
              </Route>
              <Route path='/'>
                <Redirect to='/vault' />
              </Route>
            </Switch>
          </Main>
        )}
        {modalOpen && <UnlockModal closeModal={() => setModalOpen(false)} modalOpen={modalOpen} />}
        {snackbarMessage && <Snackbar type={snackbarType} message={snackbarMessage} open={true} />} {/* TODO */}
        {loading && <Loader />}
      </IpfsRouter>
    </ThemeProvider>
  )
}

export default withNamespaces()(App)
