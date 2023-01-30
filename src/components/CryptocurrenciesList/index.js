import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrenciesList()
  }

  getCryptoCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({currenciesList: formattedData, isLoading: false})
  }

  renderCurrenciesList = () => {
    const {currenciesList} = this.state

    return (
      <ul className="currencies-list-container">
        {currenciesList.map(eachItem => (
          <CryptocurrencyItem currencyDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="cryptocurrenciesList-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="list-table-container">
          <div className="list-table-header-container">
            <p className="coinType-heading">Coin Type</p>
            <p className="usdValue-heading">USD</p>
            <p className="euroValue-heading">EURO</p>
          </div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            this.renderCurrenciesList()
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
