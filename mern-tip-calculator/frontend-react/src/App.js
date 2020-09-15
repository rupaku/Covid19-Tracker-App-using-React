import React, { useState, useEffect } from "react"

import "./App.css"

function App() {
  const [amount, setAmount] = useState("")
  const [percent, setPercent] = useState("")
  const [tip, setTip] = useState("")
  useEffect(() => {}, [])

  const calculateTip = (e) => {
    e.preventDefault()
    const data = {
      amount: amount,
      tip: percent,
    }
    fetch("http://localhost:9000/api/v1/calculatetip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setTip(data.toBePaid)
      })
  }

  return (
    <div className="App">
      {/* Amount 
      Percentage */}
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        value={percent}
        onChange={(e) => setPercent(e.target.value)}
      />
      <button onClick={calculateTip}>Calculate Tip</button>
      <h1>{tip}</h1>
    </div>
  )
}

export default App
