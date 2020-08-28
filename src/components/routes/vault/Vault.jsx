import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  ERROR,
  GET_POOL_BALANCES,
  POOL_BALANCES_RETURNED,
  DEPOSIT_POOL_RETURNED,
  WITHDRAW_POOL_RETURNED,
  CONNECTION_CONNECTED,
  CONNECTION_DISCONNECTED,
} from '../../../constants/constants'
import Store from '../../../stores/store'
import { withNamespaces } from 'react-i18next'
import Snackbar from '../../common/snackbar/Snackbar'
import Loader from '../../common/loader/Loader'
import UnlockModal from '../../unlock/unlockModal'
import ProductAssets from '../../productAssets/ProductAssets'
import ProductActions from '../../productActions/ProductActions'
import { Container, MainWrapper, Shadow } from './style'

const emitter = Store.emitter
const dispatcher = Store.dispatcher
const store = Store.store

const Vault = ({ t, account, setAccount, currentTheme }) => {
  const [assets, setAssets] = useState(store.getStore('poolAssets'))
  const [currentAsset, setCurrentAsset] = useState(assets[0])
  const [modalOpen, setModalOpen] = useState(false)
  const [snackbarType, setSnackbarType] = useState(null)
  const [snackbarMessage, setSnackbarMessage] = useState(null)
  const [refreshTimer, setRefreshTimer] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
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
    return () => {
      clearTimeout(refreshTimer)
      emitter.removeListener(DEPOSIT_POOL_RETURNED, showHash)
      emitter.removeListener(WITHDRAW_POOL_RETURNED, showHash)
      emitter.removeListener(ERROR, errorReturned)
      emitter.removeListener(CONNECTION_CONNECTED, connectionConnected)
      emitter.removeListener(CONNECTION_DISCONNECTED, connectionDisconnected)
      emitter.removeListener(POOL_BALANCES_RETURNED, balancesReturned)
    }
  }, []) // eslint-disable-line

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

  return (
    <Container>
      {account.address === undefined ? (
        <>
          <h1>vault route</h1>
          <h2>account: {account.address}</h2>
          <h2>asset: {currentAsset.symbol}</h2>
          <button onClick={() => setModalOpen(true)}>login</button>
        </>
      ) : (
        <>
          <MainWrapper>
            <ProductAssets
              assets={assets}
              currentAsset={currentAsset}
              currentTheme={currentTheme}
              setCurrentAsset={setCurrentAsset}
            />
            <ProductActions currentAsset={currentAsset} />
          </MainWrapper>
          <Shadow />
        </>
      )}
      {modalOpen && <UnlockModal closeModal={() => setModalOpen(false)} modalOpen={modalOpen} />}
      {snackbarMessage && <Snackbar type={snackbarType} message={snackbarMessage} open={true} />} {/* TODO */}
      {loading && <Loader />}
    </Container>
  )
}

export default withNamespaces()(Vault)
