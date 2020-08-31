import React from 'react'
import { withNamespaces } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { Container } from './style'

const Main = ({ children, isBeta }) => {
  return <Container isBeta={isBeta}>{children}</Container>
}

export default withNamespaces()(withRouter(Main))
