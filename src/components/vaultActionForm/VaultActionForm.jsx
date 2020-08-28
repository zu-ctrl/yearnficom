import React, { useEffect, useState } from 'react'
import {
  ERROR,
  DEPOSIT_POOL,
  DEPOSIT_POOL_RETURNED,
  WITHDRAW_POOL,
  WITHDRAW_POOL_RETURNED,
  DEPOSIT_ALL_POOL,
  DEPOSIT_ALL_POOL_RETURNED,
  WITHDRAW_ALL_POOL,
  WITHDRAW_ALL_POOL_RETURNED,
} from '../../constants/constants'
import Store from '../../stores/store'
import { TextField, Slider } from '@material-ui/core'

import {
  Container,
  FormContainer,
  InputBox,
  Balance,
  WrapContainer,
  Description,
  ActionButton,
  ButtonText,
  ButtonWrapper,
  SliderContainer,
  Percent,
} from './style'

const emitter = Store.emitter
const dispatcher = Store.dispatcher
const store = Store.store

const VaultActionForm = ({ asset, startLoading }) => {
  const [amount, setAmount] = useState('')
  const [amountError, setAmountError] = useState(false)
  const [redeemAmount, setRedeemAmount] = useState('')
  const [redeemAmountError, setRedeemAmountError] = useState(false)
  const [account] = useState(store.getStore('account'))
  const [leftSlider, setLeftSlider] = useState(0)
  const [rightSlider, setRightSlider] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emitter.on(DEPOSIT_POOL_RETURNED, depositReturned)
    emitter.on(WITHDRAW_POOL_RETURNED, withdrawReturned)
    emitter.on(DEPOSIT_ALL_POOL_RETURNED, depositReturned)
    emitter.on(WITHDRAW_ALL_POOL_RETURNED, withdrawReturned)
    emitter.on(ERROR, errorReturned)
    return () => {
      emitter.removeListener(DEPOSIT_POOL_RETURNED, depositReturned)
      emitter.removeListener(WITHDRAW_POOL_RETURNED, withdrawReturned)
      emitter.removeListener(DEPOSIT_ALL_POOL_RETURNED, depositReturned)
      emitter.removeListener(WITHDRAW_ALL_POOL_RETURNED, withdrawReturned)
      emitter.removeListener(ERROR, errorReturned)
    }
  }, [])

  const depositReturned = () => {
    setLoading(false)
    setAmount('')
  }

  const withdrawReturned = (txHash) => {
    setLoading(false)
    setRedeemAmount('')
  }

  const errorReturned = (error) => {
    setLoading(false)
  }

  const handleOnChange = (e) => {
    console.log('handleOnChange', e)
    // const val = []
    // val[e.target.id] = e.target.value
    // this.setState(val)
    // if (e.currentTarget.id === 'amount') this.setState({ leftSlider: 0 })
    // if (e.currentTarget.id === 'redeemAmount') this.setState({ rightSlider: 0 })
  }

  const onDeposit = () => {
    setAmountError(false)
    if (!amount || isNaN(amount) || amount <= 0 || amount > asset.balance) {
      setAmountError(true)
      return false
    }
    setLoading(true)
    startLoading()
    dispatcher.dispatch({ type: DEPOSIT_POOL, content: { amount: amount, asset: asset } })
  }

  const onDepositAll = () => {
    setLoading(true)
    startLoading()
    dispatcher.dispatch({ type: DEPOSIT_ALL_POOL, content: { asset: asset } })
  }

  const onWithdraw = () => {
    setRedeemAmountError(false)
    if (!redeemAmount || isNaN(redeemAmount) || redeemAmount <= 0 || redeemAmount > asset.pooledBalance) {
      setRedeemAmountError(true)
      return false
    }
    setLoading(true)
    startLoading()
    dispatcher.dispatch({ type: WITHDRAW_POOL, content: { amount: redeemAmount, asset: asset } })
  }

  const onWithdrawAll = () => {
    setLoading(true)
    startLoading()
    dispatcher.dispatch({ type: WITHDRAW_ALL_POOL, content: { asset: asset } })
  }

  const updateAmount = (percent) => {
    if (loading) return
    const updatedAmount = Math.floor(((asset.balance * percent) / 100) * 10000) / 10000
    setAmount(updatedAmount.toFixed(4))
  }

  const updateRedeemAmount = (percent) => {
    if (loading) return
    const updatedRedeemAmount = Math.floor(((asset.pooledBalance * percent) / 100) * 10000) / 10000
    setRedeemAmount(updatedRedeemAmount.toFixed(4))
  }

  return (
    <Container>
      <FormContainer>
        <WrapContainer>
          <InputBox>
            <TextField
              fullWidth
              id='amount'
              variant='filled'
              value={amount}
              error={amountError}
              onChange={handleOnChange}
              disabled={loading || asset.disabled}
              placeholder='0.00'
            />
          </InputBox>

          {!asset.disabled && (
            <Balance>
              {'Wallet Balance: ' + (asset.balance ? (Math.floor(asset.balance * 10000) / 10000).toFixed(4) : '0.0000')}{' '}
              {asset.tokenSymbol ? asset.tokenSymbol : asset.symbol}
            </Balance>
          )}
          <SliderContainer>
            <Slider
              value={leftSlider}
              aria-labelledby='discrete-slider'
              step={1}
              marks
              min={0}
              max={100}
              valueLabelDisplay='on'
              disabled={loading || asset.disabled}
              onChange={(_, value) => {
                setLeftSlider(value)
                updateAmount(value)
              }}
            />
          </SliderContainer>
          <Percent>
            <div>0%</div>
            <div>25%</div>
            <div>50%</div>
            <div>75%</div>
            <div>100%</div>
          </Percent>
          <ButtonWrapper>
            <ActionButton
              disabled={loading || !account.address || asset.balance <= 0 || asset.depositDisabled === true}
              onClick={onDeposit}
            >
              <img src={require(`../../assets/ico-deposit.svg`)} alt='' />
              <ButtonText
                disabled={loading || !account.address || asset.balance <= 0 || asset.depositDisabled === true}
              >
                Deposit
              </ButtonText>
            </ActionButton>
            {asset.version === 2 && (
              <ActionButton
                disabled={loading || !account.address || asset.balance <= 0 || asset.depositDisabled === true}
                onClick={onDepositAll}
              >
                <img src={require(`../../assets/ico-deposit.svg`)} alt='' />
                <ButtonText
                  disabled={loading || !account.address || asset.balance <= 0 || asset.depositDisabled === true}
                >
                  Deposit All
                </ButtonText>
              </ActionButton>
            )}
          </ButtonWrapper>
          {asset.depositDisabled === true && (
            <Description deposit>Deposits are currently disabled for this vault</Description>
          )}
          <Description>
            Upon deposit, assets are wrapped as yTokens in your wallet representing liquidity provided
          </Description>
        </WrapContainer>
        <WrapContainer>
          <InputBox>
            <TextField
              fullWidth
              id='redeemAmount'
              value={redeemAmount}
              error={redeemAmountError}
              onChange={handleOnChange}
              disabled={loading}
              placeholder='0.00'
              variant='filled'
            />
          </InputBox>
          <Balance>
            {'Deployed: ' +
              (asset.pooledBalance ? (Math.floor(asset.pooledBalance * 10000) / 10000).toFixed(4) : '0.0000')}{' '}
            {asset.poolSymbol}{' '}
          </Balance>
          <SliderContainer>
            <Slider
              value={rightSlider}
              aria-labelledby='discrete-slider'
              step={1}
              marks
              min={0}
              max={100}
              valueLabelDisplay='on'
              disabled={loading || asset.disabled}
              onChange={(_, value) => {
                setRightSlider(value)
                updateRedeemAmount(value)
              }}
            />
          </SliderContainer>
          <Percent>
            <div>0%</div>
            <div>25%</div>
            <div>50%</div>
            <div>75%</div>
            <div>100%</div>
          </Percent>
          <ButtonWrapper>
            <ActionButton disabled={loading || !account.address || asset.pooledBalance <= 0} onClick={onWithdraw}>
              <img src={require(`../../assets/ico-withdraw.svg`)} alt='' />
              <ButtonText
                disabled={loading || !account.address || asset.balance <= 0 || asset.depositDisabled === true}
              >
                Withdraw
              </ButtonText>
            </ActionButton>
            {asset.version === 2 && (
              <ActionButton disabled={loading || !account.address || asset.pooledBalance <= 0} onClick={onWithdrawAll}>
                <img src={require(`../../assets/ico-withdraw.svg`)} alt='' />
                <ButtonText
                  disabled={loading || !account.address || asset.balance <= 0 || asset.depositDisabled === true}
                >
                  Withdraw All
                </ButtonText>
              </ActionButton>
            )}
          </ButtonWrapper>
          <Description>
            There is a 0.5% withdrawal fee on all vaults, and a 5% performance fee on subsidized gas.
          </Description>
        </WrapContainer>
      </FormContainer>
    </Container>
  )
}

export default VaultActionForm
