import React, { useContext } from 'react'
import NewItemBox from './NewItemBox'
import SearchBox from './SearchBox'
import { MODE_SEARCH, MODE_CREATE } from '../../services/mode'
import { StateContext } from '../contexts/StateProvider'

export default function InputWrapper() {
  const {
    data: { mode },
  } = useContext(StateContext)

  switch (mode) {
    case MODE_CREATE:
      return <NewItemBox />

    case MODE_SEARCH:
      return <SearchBox />

    default:
      return null
  }
}
