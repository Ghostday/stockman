import { useState } from 'react'
import '../styles/Login.css'

export default function LoginPage({login}: {login: (pin: string) => void}) {
  const [pin, setPin] = useState('');

  const handlePinChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPin(pin + e.currentTarget.innerText)
  }

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPin('')
  }

  const handlePinSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleClear(e);
    login(pin);
  }

  return (
    <div>
      <div className="pin-display">
        {pin}
      </div>
      <div className="pin-keypad">
        <div className="pin-keypad-row">
          <button className="pin-keypad-digit" onClick={handlePinChange}>1</button>
          <button className="pin-keypad-digit" onClick={handlePinChange}>2</button>
          <button className="pin-keypad-digit" onClick={handlePinChange}>3</button>
        </div>
        <div className="pin-keypad-row">
          <button className="pin-keypad-digit" onClick={handlePinChange}>4</button>
          <button className="pin-keypad-digit" onClick={handlePinChange}>5</button>
          <button className="pin-keypad-digit" onClick={handlePinChange}>6</button>
        </div>
        <div className="pin-keypad-row">
          <button className="pin-keypad-digit" onClick={handlePinChange}>7</button>
          <button className="pin-keypad-digit" onClick={handlePinChange}>8</button>
          <button className="pin-keypad-digit" onClick={handlePinChange}>9</button>
        </div>
        <div className="pin-keypad-row">
          <button className="pin-keypad-digit" onClick={handleClear}>C</button>
          <button className="pin-keypad-digit" onClick={handlePinChange}>0</button>
          <button className="pin-keypad-digit" onClick={handlePinSubmit}>&gt;</button>
        </div>
      </div>
    </div>
  )
}
