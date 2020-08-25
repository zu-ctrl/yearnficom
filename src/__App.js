import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import IpfsRouter from 'ipfs-react-router'

// import './i18n'
import interestTheme from './theme'

import Cover from './components/cover'
import InvestSimple from './components/investSimpleNew'
import Manage from './components/manage'
import Performance from './components/performance'
import Zap from './components/zapNew'
import IDai from './components/idai'
import Home from './components/home'
import Vaults from './components/poolNew'
import Header from './components/headerNew'
import Footer from './components/footerNew'

import { injected } from './stores/connectors'

import { CONNECTION_CONNECTED } from './constants'

import Store from './stores'
const emitter = Store.emitter
const store = Store.store

class App extends Component {
  constructor(props) {
    super()
    const isStoredDarkTheme = localStorage.getItem('yearnDarkMode') === 'true'
    this.state = {
      headerValue: null,
      accGlobal: null,
      isDarkTheme: isStoredDarkTheme || false,
    }
  }

  setHeaderValue = (newValue) => {
    this.setState({ headerValue: newValue })
  }

  componentWillMount() {
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
      } else {
      }
    })
  }

  handleDarkTheme = () => {
    localStorage.setItem('yearnDarkMode', !this.state.isDarkTheme)
    this.setState({ isDarkTheme: !this.state.isDarkTheme })
  }

  render() {
    const { headerValue } = this.state

    return (
      <MuiThemeProvider theme={createMuiTheme(interestTheme)}>
        <CssBaseline />
        <IpfsRouter>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              backgroundImage: `url(${require(`./assets/${this.state.isDarkTheme ? 'bg-dark' : 'bg'}.png`)})`,
              backgroundPosition: 'left bottom',
            }}
          >
            <Header isDarkTheme={this.state.isDarkTheme} />
            <Switch>
              <Route path="/apr">
                <Cover
                  accGlobal={this.state.accGlobal}
                  setAccGlobal={(accGlobal) => this.setState({ accGlobal })}
                  isDarkTheme={this.state.isDarkTheme}
                  setIsDarkTheme={this.handleDarkTheme}
                />
              </Route>
              <Route path="/earn">
                <InvestSimple
                  accGlobal={this.state.accGlobal}
                  setAccGlobal={(accGlobal) => this.setState({ accGlobal })}
                  isDarkTheme={this.state.isDarkTheme}
                  setIsDarkTheme={this.handleDarkTheme}
                />
              </Route>
              <Route path="/zap">
                <Zap
                  accGlobal={this.state.accGlobal}
                  setAccGlobal={(accGlobal) => this.setState({ accGlobal })}
                  isDarkTheme={this.state.isDarkTheme}
                  setIsDarkTheme={this.handleDarkTheme}
                />
              </Route>
              <Route path="/idai">
                <IDai />
              </Route>
              <Route path="/performance">
                <Performance />
              </Route>
              <Route path="/manage">
                <Manage />
              </Route>
              <Route path="/vaults">
                <Vaults
                  accGlobal={this.state.accGlobal}
                  setAccGlobal={(accGlobal) => this.setState({ accGlobal })}
                  isDarkTheme={this.state.isDarkTheme}
                  setIsDarkTheme={this.handleDarkTheme}
                />
              </Route>
              <Route path="/">
                <Redirect to="/vaults" />
                {/* <Home /> */}
              </Route>
            </Switch>
            <Footer isDarkTheme={this.state.isDarkTheme} />
          </div>
        </IpfsRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
