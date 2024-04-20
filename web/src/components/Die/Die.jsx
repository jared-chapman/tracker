import { useState } from 'react'
import './Die.css'

const Die = ({ defaultSides = 6, size = 4 }) => {
  const [value, setValue] = useState(1)
  const [sides, setSides] = useState(defaultSides)
  const [mod, setMod] = useState(0)
  const [total, setTotal] = useState(0)

  const sidesToShapeMap = new Map([
    [4, 'tetrahedron'],
    [6, 'cube'],
    [8, 'octahedron'],
    [10, 'pentagonal trapezohedron'],
    [12, 'dodecahedron'],
    [20, 'icosahedron'],
  ])

  const roll = () => {
    const val = Math.floor(Math.random() * sides) + 1
    setValue(val)
    setTotal(val + mod)
  }

  const changeMod = (delta) => {
    setMod(mod + delta)
  }

  const changeValue = (delta) => {
    const sidesArray = Array.from(sidesToShapeMap.keys())
    const currentIndex = sidesArray.indexOf(sides)
    const newIndex = Math.min(
      Math.max(0, currentIndex + delta),
      sidesArray.length - 1
    )
    setSides(sidesArray[newIndex])
  }

  return (
    <div className="Wrapper" style={{ '--wrapper_size': `${size + 4}em` }}>
      <span className="control">
        <button onClick={() => changeValue(-1)}>-</button>
        <div>{sides} sides</div>
        <button onClick={() => changeValue(1)}>+</button>
      </span>

      {/* eslint-disable-next-line */}
      <div
        className={`die ${sidesToShapeMap.get(sides)}`}
        onClick={roll}
        style={{ '--size': `${size}em` }}
      >
        {value}
      </div>

      <span className="mod">
        <button onClick={() => changeMod(-1)}>-</button>
        <div>{mod}</div>
        <button onClick={() => changeMod(1)}>+</button>
      </span>

      <div className="total">{total}</div>
    </div>
  )
}

export default Die
