import React from 'react'
import { withNamespaces } from 'react-i18next'
import { withRouter } from 'react-router-dom'

const Main = ({ children }) => {
  return <>{children}</>
}

export default withNamespaces()(withRouter(Main))
