// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2001}

  render() {
    const {denominationsList} = this.props

    const {amount} = this.state

    decreased = id => {
      const {value} = denominationsList

      denominationsList.filter(eachDemon => id === eachDemon.id)

      this.setState(prevCount => ({amount: prevCount.count + {value}}))
    }

    return (
      <div className="bg-container">
        <div className="money-card">
          <div className="profile-container">
            <div className="profile-logo">S</div>
            <h1 className="profile-name">Sara Williams</h1>
          </div>
          <div className="balance-container">
            <h1 className="your-balance-heading">Your Balance</h1>
            <div className="rupees-container">
              <p className="rupees">{amount}</p>
              <p className="in-rupees">in rupees</p>
            </div>
          </div>
          <h1 className="withdraw-heading">Withdraw</h1>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachDemonation => (
              <DenominationItem
                demonDetails={eachDemonation}
                key={eachDemonation.id}
                decreased={this.decreased}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
