import React from 'react'

function NewItemBox(props) {
  const { value, handleChange, handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        className="form-control add-todo"
        value={value}
        onChange={handleChange}
        placeholder="Add New"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewItemBox
