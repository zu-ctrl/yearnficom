import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import IpfsRouter from 'ipfs-react-router'
import { injected } from './stores/connectors'
import { CONNECTION_CONNECTED } from './constants/constants'
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
import Earn from './components/routes/earn/Earn'
import Zap from './components/routes/zap/Zap'
import './i18n'

const emitter = Store.emitter
const store = Store.store

const App = () => {
  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('en')
  const [account, setAccount] = useState(store.getStore('account'))
  const [isBeta, setIsBeta] = useState(localStorage.getItem('yearnfiBeta') !== 'false')
  // const [] = useState('')
  const currentTheme = theme === 'light' ? lightTheme : darkTheme
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
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <IpfsRouter>
        <BetaBanner isBeta={isBeta} setIsBeta={setIsBeta} currentTheme={currentTheme} />
        <Main>
          <FloatingActions>
            <ThemeChooser theme={theme} setTheme={setTheme} />
            <LangChooser lang={lang} setLang={setLang} />
          </FloatingActions>
          <Menu currentTheme={currentTheme} />
          <Switch>
            <Route path='/vault'>
              <Vault account={account} currentTheme={currentTheme} setAccount={setAccount} />
            </Route>
            <Route path='/zap'>
              <Zap />
            </Route>
            <Route path='/earn'>
              <Earn />
            </Route>
            <Route path='/cover'>
              <Redirect to='/vault' />
            </Route>
            <Route path='/'>
              <Redirect to='/vault' />
            </Route>
          </Switch>
        </Main>
      </IpfsRouter>
    </ThemeProvider>
  )
}

export default App
