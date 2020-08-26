const axios = require('axios')

module.exports = async (req, res) => {
  const values = []
  try {
    const data = (
      await axios({
        method: 'get',
        url: 'https://py-earn.herokuapp.com/api',
      })
    ).data

    for (let i = 0; i < Object.keys(data).length; i += 1) {
      let symbol = Object.keys(data)[i]
      const day = data[symbol].Day[2].split('%')[0]
      const week = data[symbol].Week[2].split('%')[0]
      const month = (data[symbol].Day[2].split('%')[0] * 30).toFixed(5)
      const year = data[symbol].Year[2].split('%')[0]
      if (symbol === 'yCurve') symbol = 'yUSD'
      values.push({ symbol, pyEarnData: { day, week, month, year } })
    }

    return res.json({
      body: { success: true, data: values },
    })
  } catch (e) {
    console.error('ERROR', e.toString())
    return res.json({
      body: { success: false, error: e.toString() },
    })
  }
}
