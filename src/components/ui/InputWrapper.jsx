import React, { useContext, useState } from 'react'
import NewItemBox from './NewItemBox'
import SearchBox from './SearchBox'
import { MODE_SEARCH, MODE_CREATE } from '../../services/mode'
import { StateContext } from '../contexts/StateProvider'

export default function InputWrapper() {
  const {
    data: { mode },
    actions: { addNew },
  } = useContext(StateContext)

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addNew(value)
    setValue('')
  }

  switch (mode) {
    case MODE_CREATE:
      return <NewItemBox handleSubmit={handleSubmit} handleChange={handleChange} value={value} />

    case MODE_SEARCH:
      return <SearchBox />

    default:
      return null
  }
}
