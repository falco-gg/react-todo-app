import React, { useContext } from 'react'
import { StateContext } from '../contexts/StateProvider'

export default function SearchBox() {
  const {
    data: { query },
    actions: { setSearchQuery },
  } = useContext(StateContext)

  return (
    <input
      type="text"
      autoFocus
      className="form-control search"
      value={query}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search"
    />
  )
}
