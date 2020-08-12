import React, { createContext, useState } from "react"

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of wind", id: 1 },
    { title: "name of rock", id: 2 },
    { title: "name of guest", id: 3 },
    { title: "name of love", id: 4 },
  ])
  return (
    <BookContext.Provider value={books}>{props.children}</BookContext.Provider>
  )
}

export default BookContextProvider
