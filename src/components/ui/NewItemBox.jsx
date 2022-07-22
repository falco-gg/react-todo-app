import React, { useContext, useState } from 'react'
import { StateContext } from '../contexts/StateProvider'

function NewItemBox() {
  const {
    actions: { addNew },
  } = useContext(StateContext)

  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) return
    addNew(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        className="form-control add-todo"
        value={text}
        onChange={handleTextChange}
        placeholder="Add New"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewItemBox
