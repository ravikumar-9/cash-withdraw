// Write your code here
import './index.css'

const CashWithDrawal = props => {
  const {demonDetails, decreased} = props

  const {value, id} = demonDetails

  const onDecrease = () => {
    decreased(id, value)
  }

  return (
    <button type="button" className="buttons" onClick={onDecrease}>
      {value}
    </button>
  )
}

export default CashWithDrawal
