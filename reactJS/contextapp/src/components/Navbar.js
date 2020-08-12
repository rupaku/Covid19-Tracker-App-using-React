/* Class Component COntext handling */
/*import React, { Component } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { ThemeContext } from "../contexts/ThemeContext"

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(AuthContext) => (
          <ThemeContext.Consumer>
            {(ThemeContext) => {
              const { isAuthenticated, toggleAuth } = AuthContext
              const { isLightTheme, light, dark } = ThemeContext
              const theme = isLightTheme ? light : dark
              return (
               <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged Out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default Navbar */

/* Functional Component Context handling */
import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { AuthContext } from "../contexts/AuthContext"

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const theme = isLightTheme ? light : dark
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged Out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
