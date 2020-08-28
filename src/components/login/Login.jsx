import React from 'react'
import { withNamespaces } from 'react-i18next'

const Login = ({ t, setModalOpen }) => {
  return (
    <>
      <button onClick={() => setModalOpen(true)}>Login</button>
    </>
  )
}

export default withNamespaces()(Login)
