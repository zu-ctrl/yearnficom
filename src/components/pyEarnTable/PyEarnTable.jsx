import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const PyEarnTable = ({ pyEarnData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Daily</th>
          <th>Weekly</th>
          <th>Monthly</th>
          <th>Yearly</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>APY</th>
          <td>{!pyEarnData ? <Skeleton /> : pyEarnData.day === 'N/A' ? 'N/A' : `${pyEarnData.day}%`}</td>
          <td>{!pyEarnData ? <Skeleton /> : pyEarnData.day === 'N/A' ? 'N/A' : `${pyEarnData.week}%`}</td>
          <td>{!pyEarnData ? <Skeleton /> : pyEarnData.day === 'N/A' ? 'N/A' : `${pyEarnData.month}%`}</td>
          <td>{!pyEarnData ? <Skeleton /> : pyEarnData.day === 'N/A' ? 'N/A' : `${pyEarnData.year}%`}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default PyEarnTable
