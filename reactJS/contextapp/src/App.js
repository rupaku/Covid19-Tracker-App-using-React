import React from "react"
import BookList from "./components/BookList"
import Navbar from "./components/Navbar"
import ThemeContextProvider from "./contexts/ThemeContext"
import AuthContextProvider from "./contexts/AuthContext"
import BookContextProvider from "./contexts/BookContext"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <div className="App">
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </div>
      </AuthContextProvider>
    </ThemeContextProvider>
  )
}

export default App
