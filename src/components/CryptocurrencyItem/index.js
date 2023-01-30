// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = currencyDetails

  return (
    <li className="currency-item-container">
      <div className="icon-currency-container">
        <img className="icon" src={currencyLogo} alt={currencyName} />
        <p className="currency_name">{currencyName}</p>
      </div>
      <p className="usd_value">{usdValue}</p>
      <p className="euro_value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
