import React, { useEffect, useState } from 'react'
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

const emitter = Store.emitter
const dispatcher = Store.dispatcher
const store = Store.store

const Vault = ({ t, account, setAccount }) => {
  const [assets, setAssets] = useState(store.getStore('poolAssets'))
  const [currentAsset, setCurrentAsset] = useState(assets[0])
  const [modalOpen, setModalOpen] = useState(false)
  const [snackbarType, setSnackbarType] = useState(null)
  const [snackbarMessage, setSnackbarMessage] = useState(null)
  const [value, setValue] = useState(1)
  const [refreshTimer, setRefreshTimer] = useState(null)
  const [pyEarnData, setPyEarnData] = useState([])
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
  }, [])

  const refresh = () => {
    dispatcher.dispatch({ type: GET_POOL_BALANCES, content: {} })
  }

  const balancesReturned = async () => {
    setAssets(store.getStore('poolAssets'))
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
    <div>
      <h1>vault route</h1>
      <h2>account: {account.address}</h2>
      <h2>asset: {currentAsset.symbol}</h2>
      <button onClick={() => setModalOpen(true)}>login</button>
      <ProductAssets assets={assets} currentAsset={currentAsset} setCurrentAsset={setCurrentAsset} />
      <ProductActions currentAsset={currentAsset} />
      {modalOpen && <UnlockModal closeModal={() => setModalOpen(false)} modalOpen={modalOpen} />}
      {snackbarMessage && <Snackbar type={snackbarType} message={snackbarMessage} open={true} />} {/* TODO */}
      {loading && <Loader />}
    </div>
  )
}

export default withNamespaces()(Vault)
