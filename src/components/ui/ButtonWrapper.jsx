import React, { useContext } from 'react'
import { MODE_NONE, MODE_CREATE, MODE_SEARCH } from '../../services/mode'
import { StateContext } from '../contexts/StateProvider'

export default function ButtonWrapper() {
  const {
    data: { mode },
    actions: { changeMode },
  } = useContext(StateContext)
  const isCreateMode = () => mode === MODE_CREATE
  const isSearchMode = () => mode === MODE_SEARCH

  return (
    <div>
      <a
        title="Add New"
        className={'button add ' + (isCreateMode() ? 'selected' : '')}
        onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}
      />
      <a
        title="Search"
        className={'button search ' + (isSearchMode() ? 'selected' : '')}
        onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}
      />
    </div>
  )
}
