import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  Button,
  Slider
} from '@material-ui/core';
import { withNamespaces } from 'react-i18next';

import {
  ERROR,
  DEPOSIT_POOL,
  DEPOSIT_POOL_RETURNED,
  WITHDRAW_POOL,
  WITHDRAW_POOL_RETURNED,
  DEPOSIT_ALL_POOL,
  DEPOSIT_ALL_POOL_RETURNED,
  WITHDRAW_ALL_POOL,
  WITHDRAW_ALL_POOL_RETURNED
} from '../../constants'

import Store from "../../stores";
const emitter = Store.emitter
const dispatcher = Store.dispatcher
const store = Store.store


const styles = theme => ({
  value: {
    cursor: 'pointer',
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#252626',
    marginTop: '5px',
  },
  actionInput: {
    fontSize: '14px',
    lineHeight: '22px',
    color: '#888A8C',
    '& input': {
      padding: '11px',
      fontWeight: 'normal',
      borderRadius: '6px',
    },
    '& div:hover:before': {
      borderBottom: 'none',
      boxShadow: 'none',
    },
    '& div:before': {
      border: 'none',
      boxShadow: 'none',
    },
    '& div:after': {
      border: 'none',
      boxShadow: 'none',
    },
    '& div': {
      borderRadius: '6px',
      background: '#F3F4F5',
    }
  },
  balances: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '20px',
    cursor: 'pointer'
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '1',
    marginTop: '23px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  title: {
    paddingRight: '24px'
  },
  actionButton: {
    borderRadius: '4px',
    margin: '10px 5px 0',
    padding: '8px 13px',
    maxWidth: 'max-content',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    '&:first-of-type': {
      marginLeft: '0',
    },
    '&:last-of-type': {
      marginRight: '0',
    },
    '&.MuiButton-contained.Mui-disabled':{
      color: '#b1b1b1',
    },
  },
  tradeContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '275px',
    width: '100%',
  },
  sepperator: {
    borderBottom: '1px solid #E1E1E1',
    margin: '24px',
    [theme.breakpoints.up('sm')]: {
      width: '40px',
      borderBottom: 'none',
      margin: '0px'
    }
  },
  percentSlider: {
    display: 'flex',
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginTop: '30px', 
  },
  scaleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 0px 12px 0px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  scale: {
    minWidth: '10px'
  },
  buttonText: {
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    marginLeft: '5px',
  },
  headingContainer: {
    width: '100%',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  heading: {
    paddingBottom: '12px',
    flex: 1,
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  right: {
    textAlign: 'right'
  },
  buttons: {
    display: 'flex',
    width: '100%',
    marginTop: '20px',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  disabledContainer: {
    width: '100%',
    paddingTop: '12px',
    textAlign: 'center'
  },
  box: {
    background: '#fff',
    boxShadow: '0px 4px 26px rgba(83, 29, 171, 0.29)',
    borderRadius: '4px',
    padding: '25px 40px',
    maxWidth: '695px',
    width: '100%',
    margin: '0 auto'
  },
  assetHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    borderBottom: '1px solid #D5D7D9',
    paddingBottom: '20px',
  },
  assetTitle: {
    maxWidth: '340px',
    width: '100%',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#252626',
    marginLeft: '15px',
  },
  description: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#252626',
    marginTop: '19px',
  },
  percentValue: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '22px',
    alignItems: 'center',
    color: '#595959',
    marginLeft: '8px'
  },
  slider:{
    width: '83%',
    '& .MuiSlider-rail':{
      height: '8px',
      background: '#dcdcdc',
    },
    '& .MuiSlider-track':{
      height: '8px',
      background: '#1890FF',
    },
    '& .MuiSlider-mark':{
      height: '14px',
      width: '1px',
      background: '#D5D7D9',
      marginTop: '-3px'
    },
    '& .MuiSlider-thumb':{
      display: 'none',
    }
  }
});


class Asset extends Component {

  constructor() {
    super()

    this.state = {
      amount: '',
      amountError: false,
      redeemAmount: '',
      redeemAmountError: false,
      account: store.getStore('account'),
      leftSlider: 0,
      rightSlider: 0,
    }
  }

  componentWillMount() {
    emitter.on(DEPOSIT_POOL_RETURNED, this.depositReturned);
    emitter.on(WITHDRAW_POOL_RETURNED, this.withdrawReturned);
    emitter.on(DEPOSIT_ALL_POOL_RETURNED, this.depositReturned);
    emitter.on(WITHDRAW_ALL_POOL_RETURNED, this.withdrawReturned);
    emitter.on(ERROR, this.errorReturned);
  }

  componentWillUnmount() {
    emitter.removeListener(DEPOSIT_POOL_RETURNED, this.depositReturned);
    emitter.removeListener(WITHDRAW_POOL_RETURNED, this.withdrawReturned);
    emitter.removeListener(DEPOSIT_ALL_POOL_RETURNED, this.depositReturned);
    emitter.removeListener(WITHDRAW_ALL_POOL_RETURNED, this.withdrawReturned);
    emitter.removeListener(ERROR, this.errorReturned);
  };

  depositReturned = () => {
    this.setState({ loading: false, amount: '' })
  };

  withdrawReturned = (txHash) => {
    this.setState({ loading: false, redeemAmount: '' })
  };

  errorReturned = (error) => {
    this.setState({ loading: false })
  };

  render() {
    const { classes, asset } = this.props;
    const {
      account,
      amount,
      amountError,
      redeemAmount,
      redeemAmountError,
      loading,
      leftSlider,
      rightSlider
    } = this.state

    return (
      <div className={ classes.box }> 
        <div className={ classes.assetHeader }>
          <img
            alt=""
            src={require('../../assets/' + asset.symbol + '-logo.png')}
            height={'40px'}
            style={asset.disabled ? { filter: 'grayscale(100%)' } : {}}
          />
          <Typography className={ classes.assetTitle } variant={ 'h6'}>Choose an asset in the table below and deposit it so YFI can put it to work for you</Typography>
        </div>
        <div className={ classes.actionsContainer }>
          <div className={ classes.tradeContainer }>
            <TextField
              fullWidth
              className={ classes.actionInput }
              id='amount'
              variant="filled"
              value={ amount }
              error={ amountError }
              onChange={ this.onChange }
              disabled={ loading || asset.disabled }
              placeholder="0.00"
              onKeyDown={ this.inputKeyDown }
            />
            {!asset.disabled && <div className={ classes.balances }>
                <Typography variant='h4' className={ classes.value } noWrap>{ 'Balance: '+ (asset.balance ? (Math.floor(asset.balance*10000)/10000).toFixed(4) : '0.0000') } { asset.tokenSymbol ? asset.tokenSymbol : asset.symbol }</Typography>
            </div>}
            <div className={ classes.percentSlider }>
              <Slider
                defaultValue={0}
                className={ classes.slider }
                aria-labelledby="discrete-slider"
                step={25}
                marks
                min={0}
                max={100}
                disabled={ loading || asset.disabled }
                onChange={(_, value) => {
                  this.setState({ leftSlider: value })
                  this.setAmount(value)
                }}
              />
              <Typography className={ classes.percentValue } variant={ 'h6'}>{leftSlider}%</Typography>
            </div>
            <div className={ classes.buttons }>
              <Button
                className={ classes.actionButton }
                variant="contained"
                color="primary"
                disabled={ loading || !account.address || asset.balance <= 0 || asset.depositDisabled === true }
                onClick={ this.onDeposit }
                fullWidth
              >
                <img src={require(`../../assets/ico-deposit.svg`)} alt="" />
                <Typography className={ classes.buttonText } variant={ 'h5'} color={asset.disabled?'':''}>Deposit</Typography>
              </Button>
              { asset.version === 2 &&
                <Button
                  className={ classes.actionButton }
                  variant="contained"
                  color="primary"
                  disabled={ loading || !account.address || asset.balance <= 0 || asset.depositDisabled === true }
                  onClick={ this.onDepositAll }
                  fullWidth
                  >
                  <img src={require(`../../assets/ico-deposit.svg`)} alt="" />
                  <Typography className={ classes.buttonText } variant={ 'h5'} color={asset.disabled?'':''}>Deposit All</Typography>
                </Button>
              }
            </div>
            { asset.depositDisabled === true &&
              <div className={classes.disabledContainer}>
                <Typography variant='h4'>Deposits are currently disabled for this vault</Typography>
              </div>
            }
            <Typography className={ classes.description } variant='h6'>Upon deposit, assets are wrapped as yTokens in your wallet representing liquidity provided</Typography>
          </div>
          <div className={ classes.sepperator }></div>
          <div className={classes.tradeContainer}>
            <TextField
              fullWidth
              className={ classes.actionInput }
              id='redeemAmount'
              value={ redeemAmount }
              error={ redeemAmountError }
              onChange={ this.onChange }
              disabled={ loading }
              placeholder="0.00"
              variant="filled"
              onKeyDown={ this.inputRedeemKeyDown }
            />
            <div className={ classes.balances }>
              <Typography variant='h4' className={ classes.value } noWrap>{ 'Balance: ' + (asset.pooledBalance ? (Math.floor(asset.pooledBalance*10000)/10000).toFixed(4) : '0.0000') } { asset.poolSymbol } </Typography>
            </div>
            <div className={ classes.percentSlider }>
              <Slider
                className={ classes.slider }
                defaultValue={0}
                aria-labelledby="discrete-slider"
                step={25}
                marks
                min={0}
                max={100}
                disabled={ loading || asset.disabled }
                onChange={(_, value) => {
                  this.setState({ rightSlider: value })
                  this.setRedeemAmount(value)
                }}
              />
              <Typography className={ classes.percentValue } variant={ 'h6'}>{rightSlider}%</Typography>
            </div>
            <div className={ classes.buttons }>
              <Button
                className={ classes.actionButton }
                variant="contained"
                color="primary"
                disabled={ loading || !account.address || asset.pooledBalance <= 0 }
                onClick={ this.onWithdraw }
                fullWidth
                >
                <img src={require(`../../assets/ico-withdraw.svg`)} alt="" />
                <Typography className={ classes.buttonText } variant={ 'h5'} color=''>Withdraw</Typography>
              </Button>
              { asset.version === 2 &&
                <Button
                  className={ classes.actionButton }
                  variant="contained"
                  color="primary"
                  disabled={ loading || !account.address || asset.pooledBalance <= 0 }
                  onClick={ this.onWithdrawAll }
                  fullWidth
                  >
                  <img src={require(`../../assets/ico-withdraw.svg`)} alt="" />
                  <Typography className={ classes.buttonText } variant={ 'h5'} color=''>Withdraw All</Typography>
                </Button>
              }
            </div>
            <Typography className={ classes.description } variant='h6'>There is a 0.5% withdrawal fee on all vaults, and a 5% performance fee on subsidized gas.</Typography>
          </div>
        </div>
      </div>
    )
  };

  onChange = (event) => {
    let val = []
    val[event.target.id] = event.target.value
    this.setState(val)
  }

  inputKeyDown = (event) => {
    if (event.which === 13) {
      this.onInvest();
    }
  }

  onDeposit = () => {
    this.setState({ amountError: false })

    const { amount } = this.state
    const { asset, startLoading } = this.props

    if(!amount || isNaN(amount) || amount <= 0 || amount > asset.balance) {
      this.setState({ amountError: true })
      return false
    }

    this.setState({ loading: true })
    startLoading()
    dispatcher.dispatch({ type: DEPOSIT_POOL, content: { amount: amount, asset: asset } })
  }

  onDepositAll = () => {
    const { asset, startLoading } = this.props

    this.setState({ loading: true })
    startLoading()
    dispatcher.dispatch({ type: DEPOSIT_ALL_POOL, content: { asset: asset } })
  }

  onWithdraw = () => {
    this.setState({ redeemAmountError: false })

    const { redeemAmount } = this.state
    const { asset, startLoading  } = this.props

    if(!redeemAmount || isNaN(redeemAmount) || redeemAmount <= 0 || redeemAmount > asset.pooledBalance) {
      this.setState({ redeemAmountError: true })
      return false
    }

    this.setState({ loading: true })
    startLoading()

    dispatcher.dispatch({ type: WITHDRAW_POOL, content: { amount: redeemAmount, asset: asset } })
  }

  onWithdrawAll = () => {
    const { asset, startLoading } = this.props

    this.setState({ loading: true })
    startLoading()
    dispatcher.dispatch({ type: WITHDRAW_ALL_POOL, content: { asset: asset } })
  }

  setAmount = (percent) => {
    if(this.state.loading) {
      return
    }

    const { asset } = this.props

    const balance = asset.balance
    let amount = balance*percent/100
    amount = Math.floor(amount*10000)/10000;

    this.setState({ amount: amount.toFixed(4) })
  }

  setRedeemAmount = (percent) => {
    if(this.state.loading) {
      return
    }

    const balance = this.props.asset.pooledBalance
    let amount = balance*percent/100
    amount = Math.floor(amount*10000)/10000;

    this.setState({ redeemAmount: amount.toFixed(4) })
  }
}

export default withNamespaces()(withRouter(withStyles(styles, { withTheme: true })(Asset)));