/* Class Component */
/*import React, { Component } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

class ThemeToggle extends Component {
  static contextType = ThemeContext
  render() {
    const { toggleTheme } = this.context
    return <button onClick={toggleTheme}>Toggle the theme</button>
  }
}

export default ThemeToggle */

/* Functional COmponent */

import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return <button onClick={toggleTheme}>Toggle the theme </button>
}

export default ThemeToggle
