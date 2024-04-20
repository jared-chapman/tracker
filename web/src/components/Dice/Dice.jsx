import Die from 'src/components/Die'

import './Dice.css'

const Dice = () => {
  return (
    <span className="DiceContainer">
      <Die />
      <Die />
    </span>
  )
}

export default Dice
