import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Table, Row, Cell, TitleCell } from './style'

const PyEarnTable = ({ pyEarnData }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <TitleCell>Daily</TitleCell>
          <TitleCell>Weekly</TitleCell>
          <TitleCell>Monthly</TitleCell>
          <TitleCell>Yearly</TitleCell>
        </tr>
      </thead>
      <tbody>
        <Row>
          <Cell>APY</Cell>
          <Cell>{!pyEarnData ? <Skeleton /> : pyEarnData.day === 'N/A' ? 'N/A' : `${pyEarnData.day}%`}</Cell>
          <Cell>{!pyEarnData ? <Skeleton /> : pyEarnData.day === 'N/A' ? 'N/A' : `${pyEarnData.week}%`}</Cell>
          <Cell>{!pyEarnData ? <Skeleton /> : pyEarnData.day === 'N/A' ? 'N/A' : `${pyEarnData.month}%`}</Cell>
          <Cell>{!pyEarnData ? <Skeleton /> : pyEarnData.day === 'N/A' ? 'N/A' : `${pyEarnData.year}%`}</Cell>
        </Row>
      </tbody>
    </Table>
  )
}

export default PyEarnTable
